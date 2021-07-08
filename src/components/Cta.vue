<template>
  <section class="section">
    <b-container fluid="xl">
      <div class="cta">
        <div class="cta__content">
          <g-image
            :src="billIcon"
            class="cta__icon"
          />
          <div v-html="$t('cta.text')" class="cta__text" />
        </div>
        <a href="https://www.fakturaonline.cz/faktura" class="btn btn-lg btn-secondary">
          <span class="icon icon-new-invoice"></span>
          {{ $t("cta.cta") }}
        </a>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "cta",
  computed: {
    billIcon: function() {
      return require("!!assets-loader?width=57&quality=100&fit=inside!~/" +
        `bill-icon.svg`);
    },
  }
};
</script>
