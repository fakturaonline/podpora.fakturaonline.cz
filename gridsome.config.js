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
    }
  ]
};
