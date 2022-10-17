<template>
  <Layout>
    <b-jumbotron lead-tag="div">
      <template #lead>
        <b-container fluid="xl">
          <b-row>
            <b-col sm="auto" lg="6">
              <PostTags :post="featured" />
              <g-link :to="featured.path">
                <h1>{{ featured.data.title }}</h1>
              </g-link>
              <PostInfo :post="featured" />
              <p v-html="featured.data.perex" />
              <g-link :to="featured.path" class="link">
                <span>
                {{ $t("index.read_article") }}
                </span>
              </g-link>
            </b-col>
            <b-col sm="auto" lg="6" class="col-jumbotron-image">
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-jumbotron>
    <section class="section">
      <b-container fluid="xl">
        <b-row>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a class="h3 d-block link link--category" :href="$t('routes.About')">
              <span class="link__underline">{{ $t("index.aboutFo") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_invoice_issuing" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a
              class="h3 d-block link link--category"
              :href="$t('routes.Profile')"
            >
              <span class="link__underline">{{ $t("index.profileManagement") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_profile_management" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a
              class="h3 d-block link link--category"
              :href="$t('routes.InvoicesIssuing')"
            >
              <span class="link__underline">{{ $t("index.invoiceIssuing") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_invoice_issuing" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a
              class="h3 d-block link link--category"
              :href="$t('routes.Support')"
            >
              <span class="link__underline">{{ $t("index.support") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_support" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section section--bg-blue">
      <b-container fluid="xl">
        <h2 class="h2">{{ $t("index.lastest_posts") }}</h2>
        <PostCollection :posts="latest" />
      </b-container>
    </section>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";
import FirstPostFromCategory from "~/components/FirstPostFromCategory.vue";
import PostInfo from "~/components/PostInfo.vue";
import PostTags from "~/components/PostTags.vue";

export default {
  metaInfo() {
    return {
      title: this.$i18n.t("meta.index")
    };
  },
  components: {
    PostCollection,
    PostTags,
    PostInfo,
    FirstPostFromCategory
  },
  computed: {
    featured() {
      return this.latest[0];
    },
    latest() {
      return this.$page.latest.edges.map(e => e.node);
    },
    last_from_profile_management() {
      return this.$page.last_from_profile_management.edges.map(e => e.node);
    },
    last_from_invoice_issuing() {
      return this.$page.last_from_invoice_issuing.edges.map(e => e.node);
    },
    last_from_support() {
      return this.$page.last_from_support.edges.map(e => e.node);
    },
    last_from_about() {
      return this.$page.last_from_about.edges.map(e => e.node);
    },
  }
};
</script>

<style scoped>
.light-blue {
  background-color: #f4f9fb;
}
</style>

<page-query>
query Post {
  last_from_about: allPrismicPost(filter: { tags: { contains: ["Správa profilu"] }}, sortBy: "data.date", order: DESC, limit: 1) {
    edges {
      node {
        path,
        tags,
        data {
          title
          date
          author
          body
          perex
        }
      }
    }
  }
  last_from_profile_management: allPrismicPost(filter: { tags: { contains: ["Správa profilu"] }}, sortBy: "data.date", order: DESC, limit: 1) {
    edges {
      node {
        path,
        tags,
        data {
          title
          date
          author
          body
          perex
        }
      }
    }
  }
  last_from_invoice_issuing: allPrismicPost(filter: { tags: { contains: ["Vystavování faktur"] }}, sortBy: "data.date", order: DESC, limit: 1) {
    edges {
      node {
        path,
        tags,
        data {
          title
          date
          author
          body
          perex
        }
      }
    }
  }
  last_from_support: allPrismicPost(filter: { tags: { contains: ["Podpora"] }}, sortBy: "data.date", order: DESC, limit: 1) {
    edges {
      node {
        path,
        tags,
        data {
          title
          date
          author
          body
          perex
        }
      }
    }
  }
  latest: allPrismicPost(sortBy: "data.date", order: DESC, limit: 10) {
    edges {
      node {
        path,
        tags,
        data {
          title
          date
          author
          date
          body
          perex
        }
      }
    }
  }
}
</page-query>
