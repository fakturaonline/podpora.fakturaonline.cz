const path = require('path')
const fs = require('fs-extra')
const micromatch = require('micromatch')

const normalize = p => p.replace(/\/+$/, '') || '/'

function findImages(page) {
  let imagesArray = [];
  JSON.stringify(page, (_, nestedValue) => {
    if (nestedValue) {
      if (nestedValue['images']) {
        imagesArray = [...imagesArray, ...nestedValue['images']];
      }
      if (nestedValue['image']) {
        imagesArray = [...imagesArray, nestedValue['image']];
      }
    }
    return nestedValue;
  });
  return imagesArray;
}

module.exports = function (api, options) {
  let collection = []

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allPrismicPost(limit: 1000) {
          edges {
            node {
              path,
              last_publication_date,
            }
          }
        }
      }
    `)

    data.allPrismicPost.edges.forEach(({ node }) => {
      collection.push(node);
    })
  });

  const include = options.include.map(normalize)
  const exclude = options.exclude.map(normalize)

  exclude.push('/404') // allways exclude /404 page

  api.afterBuild(async ({ queue, config, }) => {

  if (!config.siteUrl) {
      throw new Error(`Sitemap plugin is missing a required siteUrl config.`)
    }

    const patterns = Object.keys(options.config).map(key => ({
      pattern: normalize(key),
      key
    }))

    const filename = path.join(config.outputDir, options.output)
    const pathPrefix = config.pathPrefix !== '/' ? config.pathPrefix : ''
    const staticUrls = options.staticUrls || []

    let pages = queue.filter(page => page.type ? page.type === 'static' : true)

    if (include.length) {
      pages = pages.filter(page => micromatch(page.path, include).length > 0)
    }

    if (exclude.length) {
      pages = pages.filter(page => micromatch(page.path, exclude).length < 1)
    }

    console.log(`Generate ${options.output} (${pages.length + staticUrls.length} pages)`)

    const generatedUrls = pages.map(page => {
      const pattern = patterns.find(p => micromatch.isMatch(page.path, p.pattern))
      const urlConfig = pattern ? options.config[pattern.key] : {}
      const url = page.publicPath || `${page.path}/`.replace(/\/+$/, '/')

      const pageData = options.images && require(page.dataOutput)
      const img = !!pageData && findImages(pageData).map(image=>({url: image}))

      const pageMeta = collection.find(metaPage => metaPage.path === page.location.path);
      const lastPublicationDate = pageMeta ? new Date(pageMeta.last_publication_date): null;

      return {
        url: url.startsWith(pathPrefix)
          ? url.substr(pathPrefix.length)
          : url,
        priority: urlConfig.priority,
        changefreq: urlConfig.changefreq,
        lastmod: lastPublicationDate ? lastPublicationDate : null,
        img,
      }
    })

    const sitemap = require('sitemap').createSitemap({
      hostname: normalize(config.siteUrl) + pathPrefix,
      cacheTime: options.cacheTime,
      urls: [...generatedUrls, ...staticUrls]
    })

    await fs.outputFile(filename, sitemap.toString())
  })
}

module.exports.defaultOptions = () => ({
  output: '/sitemap.xml',
  cacheTime: 600000,
  staticUrls: [],
  include: [],
  exclude: [],
  config: {}
})
