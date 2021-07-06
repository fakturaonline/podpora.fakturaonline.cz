<template>
  <div>
    <b-navbar
      toggleable="xl"
      type="light"
      variant="white"
      :sticky="true"
    >
      <b-container fluid="xl">
        <b-navbar-brand href="/">
          <g-image alt="Blog FakturaOnline" :src="logoImage" width="200" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="navbar-navigation">
            <b-nav-item :href="$url('/aktuality')">{{
              $t("index.news")
            }}</b-nav-item>
            <b-nav-item :href="$url('/novinky-z-aplikace')">{{
              $t("index.news_from_app")
            }}</b-nav-item>
            <b-nav-item :href="$url('/tipy-a-navody')">{{
              $t("index.tips_and_tutorials")
            }}</b-nav-item>
            <b-nav-item :href="$url('/ostatni')">{{
              $t("index.others")
            }}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navbar-search-and-cta">
            <b-input-group
              class="navbar-search"
            >
              <b-form-input
                :placeholder="$t('search.enter_term')"
                v-model="searchTerm"
                class="search-box"
              >
              </b-form-input>
              <b-input-group-prepend class="search-box-button">
                <span class="icon icon-search"></span>
              </b-input-group-prepend>
            </b-input-group>
            <a href="https://www.fakturaonline.cz/faktura" class="btn btn-secondary btn-sm">
              <span class="icon icon-new-invoice"></span>
              Vystavit fakturu
            </a>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <div class="page-wrapper">
      <div v-if="searchTerm !== ''">
        <b-container fluid="xl">
          <h1 class="mt-4 mb-4">
            {{ $t("search.results_for") }}: "{{ searchTerm }}"
          </h1>
          <h3 v-if="searchResults.length == 0">
            {{ $t("search.no_results_found") }}
          </h3>
          <PostCollection :posts="searchResults" />
        </b-container>
      </div>
      <div v-else>
        <slot />
      </div>
    </div>
    <Cta />
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "./Footer.vue";
import PostCollection from "~/components/PostCollection.vue";
import Cta from "~/components/Cta.vue";

export default {
  data: () => ({
    searchTerm: ""
  }),
  components: {
    PostCollection,
    PageFooter,
    Cta
  },
  computed: {
    logoImage: function() {
      return require("!!assets-loader?width=200&quality=100&fit=inside!~/" +
        `logo-fo-${this.$i18n.locale}.svg`);
    },
    searchResults() {
      const searchTerm = this.searchTerm;

      if (searchTerm == "") return [];

      const results = this.$search.search({ query: searchTerm, limit: 10 });

      return results.map(result => {
        const { path, tags, ...remainingObject } = result.node;

        return { path, tags, data: remainingObject };
      });
    }
  }
};
</script>

