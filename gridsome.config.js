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
             from: "/16-odklad-posledni-vlny-eet-v-roce-2020",
             to: "/odklad-posledni-vlny-eet-v-roce-2020/",
             status: 302
          },
          {
             from: "/17-na-co-se-nas-nejcasteji-ptate",
             to: "/na-co-se-nas-nejcasteji-ptate/",
             status: 302
          },
          {
             from: "/19-pravidla-fakturace",
             to: "/pravidla-fakturace/",
             status: 302
          },
          {
             from: "/20-aktualne-bude-dan-z-nabyti-nemovitosti-skutecne-zrusena",
             to: "/aktualne-bude-dan-z-nabyti-nemovitosti-skutecne-zrusena/",
             status: 302
          },
          {
             from: "/21-co-musi-obsahovat-faktura",
             to: "/co-musi-obsahovat-faktura/",
             status: 302
          },
          {
             from: "/22-cislujete-spravne-sve-faktury",
             to: "/cislujete-spravne-sve-faktury/",
             status: 302
          },
          {
             from: "/23-online-fakturace-je-dnes-jiz-standard-jake-jsou-jeji-vyhody",
             to: "/online-fakturace-je-dnes-jiz-standard-jake-jsou-jeji-vyhody/",
             status: 302
          },
          {
             from: "/24-naklady-ktere-lze-danove-ne-uznat",
             to: "/naklady-ktere-lze-danove-neuznat/",
             status: 302
          },
          {
             from: "/25-vyse-zaloh-pro-osvc-v-roce-2020",
             to: "/vyse-zaloh-pro-osvc-v-roce-2020",
             status: 302
          },
          {
             from: "/26-platce-vs-neplatce-dph-kdy-je-vyhodna-dobrovolna-registrace",
             to: "/platce-vs-neplatce-dph-kdy-je-vyhodna-dobrovolna-registrace/",
             status: 302
          },
          {
             from: "/27-lhuty-pro-povinnou-archivaci-faktur-pro-podnikatele-v-cr",
             to: "/lhuty-pro-povinnou-archivaci-faktur-pro-podnikatele-v-cr/",
             status: 302
          },
          {
             from: "/28-aktualne-dan-z-nabyti-nemovitosti-zrusena",
             to: "/aktualne-dan-z-nabyti-nemovitosti-zrusena/",
             status: 302
          },
          {
             from: "/29-podpora-fakturaonline-cz",
             to: "/podpora-fakturaonline-cz/",
             status: 302
          },
          {
             from: "/30-fakturaonline-spustila-funkci-zobrazeni-stavu-faktur",
             to: "/fakturaonline-spustila-funkci-zobrazeni-stavu-faktur",
             status: 302
          },
          {
             from: "/31-pausalni-dan-pro-osvc-od-roku-2021",
             to: "/pausalni-dan-pro-osvc-od-roku-2021/",
             status: 302
          },
          {
             from: "/32-nevite-zda-podnikat-jako-fyzicka-ci-pravnicka-osoba",
             to: "/nevite-zda-podnikat-jako-fyzicka-ci-pravnicka-osoba/",
             status: 302
          },
          {
             from: "/33-nejen-danove-novinky-pro-rok-2021",
             to: "/nejen-danove-novinky-pro-rok-2021/",
             status: 302
          },
          {
             from: "/34-vyse-zaloh-pro-osvc-v-roce-2021",
             to: "/vyse-zaloh-pro-osvc-v-roce-2021",
             status: 302
          },
          {
             from: "/35-fakturaonline-pro-nove-uzivatele-jsme-prodlouzili-zkusebni-obdobi",
             to: "/fakturaonline-pro-nove-uzivatele-jsme-prodlouzili-zkusebni-obdobi/",
             status: 302
          },
          {
             from: "/36-datova-schranka-jake-jsou-jeji-vyhody-a-nevyhody-jak-si-ji-zaridit",
             to: "/datova-schranka-jake-jsou-jeji-vyhody-a-nevyhody-jak-si-ji-zaridit/",
             status: 302
          },
          {
             from: "/37-podpora-v-nezamestanosti-pro-osvc",
             to: "/podpora-v-nezamestanosti-pro-osvc/",
             status: 302
          },
          {
             from: "/39-je-podnikatelsky-ucet-pro-osvc-nutnosti",
             to: "/je-podnikatelsky-ucet-pro-osvc-nutnosti/",
             status: 302
          },
          {
             from: "/40-dane-a-danove-priznani-2021-terminy-a-sankce",
             to: "/dane-a-danove-priznani-2021-terminy-a-sankce/",
             status: 302
          },
          {
             from: "/41-prodlouzeni-zkusebni-verze-a-dalsi-novinky-ve-fakturaonline-cz",
             to: "/prodlouzeni-zkusebni-verze-a-dalsi-novinky-ve-fakturaonline-cz/",
             status: 302
          },
          {
             from: "/42-zmena-hesla-hromadne-exporty-a-mnoho-dalsiho",
             to: "/zmena-hesla-hromadne-exporty-a-mnoho-dalsiho/",
             status: 302
          },
          {
             from: "/44-jak-platit-pomoci-qr-kodu-na-fakture",
             to: "/jak-platit-pomoci-qr-kodu-na-fakture/",
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
