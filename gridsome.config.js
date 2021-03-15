module.exports = {
  siteName: "FakturaOnline",
  siteDescription:
    "Všechny novinky ze světa financí a fakturování na jednom místě",
  siteUrl: "https://blog.fakturaonline.cz",
  templates: {
    PrismicPost: "/articles/:slug"
  },
  plugins: [
    {
      use: require("./src/plugins/gridsome-source-prismic"),
      options: {
        prismic_url: process.env.PRISMIC_API_URL,
        prismic_token: process.env.PRISMIC_TOKEN,
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
    }
  ]
};
