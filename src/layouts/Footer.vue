<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <a :href="linkTo()" target="_blank">
            <g-image :src="logoImage" />
          </a>
        </div>
        <div class="footer-menu-wrapper">
          <div class="footer-menu">
            <div class="footer-menu__col" v-if="$i18n.locale === 'cs-cz'">
              <div class="footer-menu__item">
                <strong>{{ $t("footer.follow_us") }}</strong>
                <div class="footer-menu__item">
                  <a
                    class="footer-menu__link"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://blog.fakturaonline.cz"
                    >Blog</a
                  >
                </div>
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  href="https://www.facebook.com/FakturaOnline"
                  rel="noreferrer noopener"
                  >Facebook</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  href="https://www.linkedin.com/company/fakturaonline-cz"
                  rel="noreferrer noopener"
                  >LinkedIn</a
                >
              </div>
            </div>
            <div class="footer-menu__col">
              <div class="footer-menu__item">
                <strong>{{ $t("footer.tutorials") }}</strong>
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.templates'))"
                  >{{ $t("footer.invoice_samples") }}</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.faqs'))"
                  >{{ $t("footer.faq") }}</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.help'))"
                  >{{ $t("footer.help") }}</a
                >
              </div>
            </div>
            <div class="footer-menu__col">
              <div class="footer-menu__item">
                <strong>{{ $t("footer.important_documents") }}</strong>
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.terms_of_use'))"
                  >{{ $t("footer.terms_of_use") }}</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.privacy_policy'))"
                  >{{ $t("footer.privacy_policy") }}</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.cookie_policy'))"
                  >{{ $t("footer.cookie_policy") }}</a
                >
              </div>
            </div>
            <div class="footer-menu__col">
              <div class="footer-menu__item">
                <strong>{{ $t("footer.more_information") }}</strong>
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.pricelist'))"
                  >{{ $t("footer.price_list") }}</a
                >
              </div>
              <div class="footer-menu__item" v-if="$i18n.locale === 'cs-cz'">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  href="https://www.fakturaonline.cz/fakturace-pro-neziskove-organizace-zadarmo"
                  >Neziskové organizace</a
                >
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  :href="linkTo($t('footer.links.contact_us'))"
                  >{{ $t("footer.contact_us") }}</a
                >
              </div>
            </div>
            <div class="footer-menu__col">
              <div class="footer-menu__item">
                <strong>{{ $t("footer.for_developers") }}</strong>
              </div>
              <div class="footer-menu__item">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  href="https://api.fakturaonline.cz"
                  >API</a
                >
              </div>
              <div class="footer-menu__item" v-if="$i18n.locale === 'cs-cz'">
                <strong>Migrace faktur z</strong>
              </div>
              <div class="footer-menu__item" v-if="$i18n.locale === 'cs-cz'">
                <a
                  class="footer-menu__link"
                  target="_blank"
                  href="https://www.fakturaonline.cz/migrator/billapp"
                  >BillApp</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "page-footer",
  computed: {
    logoImage: function() {
      return require("!!assets-loader?height=300!~/" +
        `footer-logo-${this.$i18n.locale}.svg`);
    }
  },
  methods: {
    linkTo(path = "") {
      const baseHost =
        this.$i18n.locale === "cs-cz"
          ? "https://www.fakturaonline.cz"
          : "https://www.invoiceonline.com";
      return `${baseHost}/${path}`;
    }
  }
};
</script>
