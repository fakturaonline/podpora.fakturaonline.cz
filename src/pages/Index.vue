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
              <g-link :to="featured.path">
                <img
                  :src="featured.data.featured_image.url"
                  class="img-fluid"
                />
              </g-link>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-jumbotron>

    <section class="section">
      <b-container fluid="xl">
        <b-row>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a class="h3 d-block link link--category" :href="$url('/aktuality')">
              <span class="link__underline">{{ $t("index.news") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_news_aktuality" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a
              class="h3 d-block link link--category"
              :href="$url('/novinky-z-aplikace')"
            >
              <span class="link__underline">{{ $t("index.news_from_app") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_news_from_app" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a
              class="h3 d-block link link--category"
              :href="$url('/tipy-a-navody')"
            >
              <span class="link__underline">{{ $t("index.tips_and_tutorials") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_tuts" />
          </b-col>
          <b-col sm="6" lg="3" class="col-post-from-category">
            <a class="h3 d-block link link--category" :href="$url('/dane')">
              <span class="link__underline">{{ $t("index.taxes") }}</span>
            </a>
            <FirstPostFromCategory :posts="last_from_taxes" />
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
      return this.$page.featured.edges.map(e => e.node)[0];
    },
    latest() {
      return this.$page.latest.edges.map(e => e.node);
    },
    last_from_news_from_app() {
      return this.$page.last_from_news_from_app.edges.map(e => e.node);
    },
    last_from_news_aktuality() {
      return this.$page.last_from_news_aktuality.edges.map(e => e.node);
    },
    last_from_taxes() {
      return this.$page.last_from_taxes.edges.map(e => e.node);
    },
    last_from_tuts() {
      return this.$page.last_from_tuts.edges.map(e => e.node);
    }
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
  last_from_news_from_app: allPrismicPost(filter: { tags: { contains: ["Novinky z aplikace"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_news_aktuality: allPrismicPost(filter: { tags: { contains: ["Aktuality"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_taxes: allPrismicPost(filter: { tags: { contains: ["Daně"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_tuts: allPrismicPost(filter: { tags: { contains: ["Tipy a návody"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
          featured_image {
            url
          }
        }
      }
    }
  }
  featured: allPrismicPost(filter: { tags: { contains: ["Featured"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
          featured_image {
            url
          }
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
          featured_image {
            url
          }
        }
      }
    }
  }
}
</page-query>
