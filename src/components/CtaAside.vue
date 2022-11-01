<template>
  <div class="cta-aside" v-if="visible">
    <div class="cta-aside__close">
      <span class="icon icon-close" @click="hide"></span>
    </div>
    <g-image
      :src="billIcon"
      class="cta-aside__icon"
    />
    <div class="text-primary">{{ $t("cta_aside.name") }}</div>
    <div class="cta-aside__text"><strong>{{ $t("cta_aside.text") }}</strong></div>
    <a href="https://www.fakturaonline.cz/faktura" class="btn btn-secondary">
      <span class="icon icon-new-invoice"></span>
      {{ $t("cta_aside.cta") }}
    </a>
    <div class="cta-aside__claim">
      <span class="icon icon-lock"></span>
      {{ $t("cta_aside.claim") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "cta-aside",
  data: () => ({
    visible: true
  }),
  computed: {
    vidisble() {
      this.visible === true;
    },
    billIcon: function() {
      return require("!!assets-loader?width=57&quality=100&fit=inside!~/" +
        `bill-icon.svg`);
    },
  },
  methods: {
    hide() {
      this.visible = false
    }
  }
};
</script>
