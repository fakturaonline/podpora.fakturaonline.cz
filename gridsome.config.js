module.exports = {
  siteName: process.env.SITE_NAME_TITLE,
  siteDescription: process.env.SITE_DESCRIPTION,
  siteUrl: process.env.SITE_URL,
  templates: {
    PrismicPost: "/articles/:slug"
  },
  plugins: [
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
              "featured_image",
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
        locales: ["cs-cz", "en-gb"],
        defaultLocale: process.env.PRISMIC_LOCALE,
        enablePathRewrite: false,
        rewriteDefaultLanguage: process.env.PRISMIC_LOCALE,
        messages: {
          [process.env.PRISMIC_LOCALE]: require(`./src/locales/${
            process.env.PRISMIC_LOCALE
          }.json`)
        }
      }
    }
  ]
};
