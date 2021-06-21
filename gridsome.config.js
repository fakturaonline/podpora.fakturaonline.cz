module.exports = {
  siteName: process.env.SITE_NAME_TITLE,
  siteDescription: process.env.SITE_DESCRIPTION,
  siteUrl: process.env.SITE_URL,
  templates: {
    PrismicPost: "/articles/:slug"
  },
  plugins: [
    {
      use: 'gridsome-plugin-netlify-redirects',
      options: {
        typeName: 'NetlifyRedirects',
        redirects: [
          {
             from: "/articles/16-odklad-posledni-vlny-eet-v-roce-2020",
             to: "/articles/odklad-posledni-vlny-eet-v-roce-2020/",
             status: 302
          },
          {
             from: "/articles/17-na-co-se-nas-nejcasteji-ptate",
             to: "/articles/na-co-se-nas-nejcasteji-ptate/",
             status: 302
          },
          {
             from: "/articles/19-pravidla-fakturace",
             to: "/articles/pravidla-fakturace/",
             status: 302
          },
          {
             from: "/articles/20-aktualne-bude-dan-z-nabyti-nemovitosti-skutecne-zrusena",
             to: "/articles/aktualne-bude-dan-z-nabyti-nemovitosti-skutecne-zrusena/",
             status: 302
          },
          {
             from: "/articles/21-co-musi-obsahovat-faktura",
             to: "/articles/co-musi-obsahovat-faktura/",
             status: 302
          },
          {
             from: "/articles/22-cislujete-spravne-sve-faktury",
             to: "/articles/cislujete-spravne-sve-faktury/",
             status: 302
          },
          {
             from: "/articles/23-online-fakturace-je-dnes-jiz-standard-jake-jsou-jeji-vyhody",
             to: "/articles/online-fakturace-je-dnes-jiz-standard-jake-jsou-jeji-vyhody/",
             status: 302
          },
          {
             from: "/articles/24-naklady-ktere-lze-danove-ne-uznat",
             to: "/articles/naklady-ktere-lze-danove-neuznat/",
             status: 302
          },
          {
             from: "/articles/25-vyse-zaloh-pro-osvc-v-roce-2020",
             to: "/articles/vyse-zaloh-pro-osvc-v-roce-2020",
             status: 302
          },
          {
             from: "/articles/26-platce-vs-neplatce-dph-kdy-je-vyhodna-dobrovolna-registrace",
             to: "/articles/platce-vs-neplatce-dph-kdy-je-vyhodna-dobrovolna-registrace/",
             status: 302
          },
          {
             from: "/articles/27-lhuty-pro-povinnou-archivaci-faktur-pro-podnikatele-v-cr",
             to: "/articles/lhuty-pro-povinnou-archivaci-faktur-pro-podnikatele-v-cr/",
             status: 302
          },
          {
             from: "/articles/28-aktualne-dan-z-nabyti-nemovitosti-zrusena",
             to: "/articles/aktualne-dan-z-nabyti-nemovitosti-zrusena/",
             status: 302
          },
          {
             from: "/articles/29-podpora-fakturaonline-cz",
             to: "/articles/podpora-fakturaonline-cz/",
             status: 302
          },
          {
             from: "/articles/30-fakturaonline-spustila-funkci-zobrazeni-stavu-faktur",
             to: "/articles/fakturaonline-spustila-funkci-zobrazeni-stavu-faktur",
             status: 302
          },
          {
             from: "/articles/31-pausalni-dan-pro-osvc-od-roku-2021",
             to: "/articles/pausalni-dan-pro-osvc-od-roku-2021/",
             status: 302
          },
          {
             from: "/articles/32-nevite-zda-podnikat-jako-fyzicka-ci-pravnicka-osoba",
             to: "/articles/nevite-zda-podnikat-jako-fyzicka-ci-pravnicka-osoba/",
             status: 302
          },
          {
             from: "/articles/33-nejen-danove-novinky-pro-rok-2021",
             to: "/articles/nejen-danove-novinky-pro-rok-2021/",
             status: 302
          },
          {
             from: "/articles/34-vyse-zaloh-pro-osvc-v-roce-2021",
             to: "/articles/vyse-zaloh-pro-osvc-v-roce-2021",
             status: 302
          },
          {
             from: "/articles/35-fakturaonline-pro-nove-uzivatele-jsme-prodlouzili-zkusebni-obdobi",
             to: "/articles/fakturaonline-pro-nove-uzivatele-jsme-prodlouzili-zkusebni-obdobi/",
             status: 302
          },
          {
             from: "/articles/36-datova-schranka-jake-jsou-jeji-vyhody-a-nevyhody-jak-si-ji-zaridit",
             to: "/articles/datova-schranka-jake-jsou-jeji-vyhody-a-nevyhody-jak-si-ji-zaridit/",
             status: 302
          },
          {
             from: "/articles/37-podpora-v-nezamestanosti-pro-osvc",
             to: "/articles/podpora-v-nezamestanosti-pro-osvc/",
             status: 302
          },
          {
             from: "/articles/39-je-podnikatelsky-ucet-pro-osvc-nutnosti",
             to: "/articles/je-podnikatelsky-ucet-pro-osvc-nutnosti/",
             status: 302
          },
          {
             from: "/articles/40-dane-a-danove-priznani-2021-terminy-a-sankce",
             to: "/articles/dane-a-danove-priznani-2021-terminy-a-sankce/",
             status: 302
          },
          {
             from: "/articles/41-prodlouzeni-zkusebni-verze-a-dalsi-novinky-ve-fakturaonline-cz",
             to: "/articles/prodlouzeni-zkusebni-verze-a-dalsi-novinky-ve-fakturaonline-cz/",
             status: 302
          },
          {
             from: "/articles/42-zmena-hesla-hromadne-exporty-a-mnoho-dalsiho",
             to: "/articles/zmena-hesla-hromadne-exporty-a-mnoho-dalsiho/",
             status: 302
          },
          {
             from: "/articles/44-jak-platit-pomoci-qr-kodu-na-fakture",
             to: "/articles/jak-platit-pomoci-qr-kodu-na-fakture/",
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
