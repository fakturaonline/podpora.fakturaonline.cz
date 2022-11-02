module.exports = {
  siteName: process.env.SITE_NAME_TITLE,
  siteDescription: process.env.SITE_DESCRIPTION,
  siteUrl: process.env.SITE_URL,
  templates: {
    PrismicPost: "/articles/:slug"
  },
  plugins: [
   {
      use: require("./src/plugins/gridsome-plugin-sitemap"),
      options: {
         config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.8,
          },
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-redirects',
      options: {
        typeName: 'NetlifyRedirects',
        redirects: [
          {
             from: "/articles/16-odklad-posledni-vlny-eet-v-roce-2020",
             to: "/articles/odklad-posledni-vlny-eet-v-roce-2020/",
             status: 302
          }
        ]
      }
    },
    {
      use: require("./src/plugins/gridsome-source-prismic"),
      options: {
        prismic_url: process.env.PRISMIC_API_URL,
        prismic_token: process.env.PRISMIC_TOKEN,
        prismic_locale: process.env.PRISMIC_LOCALE,
        collection_prefix: "Prismic"
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title", "perex", "author"],
        collections: [
          {
            typeName: "PrismicPost",
            indexName: "PrismicPostIndex",
            fields: [
              "title",
              "path",
              "perex",
              "tags",
              "author",
              "date",
              "body"
            ],
            transform: collection => ({
              ...collection,
              ...collection.data
            })
          }
        ]
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [process.env.PRISMIC_LOCALE],
        defaultLocale: process.env.PRISMIC_LOCALE,
        enablePathRewrite: false,
        rewriteDefaultLanguage: process.env.PRISMIC_LOCALE,
        enablePathGeneration: false,
        messages: {},
        routes: require('./routes.js')
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TBGK39C',
        enabled: true,
        debug: false
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    }
  ]
};
