<template>
  <Layout>
    <b-jumbotron class="mb-5 light-blue" lead-tag="div">
      <template #lead>
        <b-container>
          <b-row>
            <b-col sm="auto" lg="6">
              <h1 class="featured--header">{{ featured.data.title }}</h1>
              <p class="featured--perex" v-html="featured.data.perex" />
              <PostTags :post="featured" />
              <PostInfo :post="featured" />
            </b-col>
            <b-col sm="auto" lg="6">
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

    <b-container>
      <b-row>
        <b-col sm="6" lg="3">
          <a class="h3 mb-3 d-block category-title" :href="$url('/aktuality')">
            {{ $t("index.news") }}

            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_news_aktuality" />
        </b-col>
        <b-col sm="6" lg="3">
          <a
            class="h3 mb-3 d-block category-title"
            :href="$url('/novinky-z-aplikace')"
          >
            {{ $t("index.news_from_app") }}
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_news_from_app" />
        </b-col>
        <b-col sm="6" lg="3">
          <a
            class="h3 mb-3 d-block category-title"
            :href="$url('/tipy-a-navody')"
          >
            {{ $t("index.tips_and_tutorials") }}
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_tuts" />
        </b-col>
        <b-col sm="6" lg="3">
          <a class="h3 mb-3 d-block category-title" :href="$url('/ostatni')">
            {{ $t("index.others") }}
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_others" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <hr />
      <h2 class="mb-3 d-block">{{ $t("index.lastest_posts") }}</h2>
      <PostCollection :posts="latest" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";
import FirstPostFromCategory from "~/components/FirstPostFromCategory.vue";
import PostInfo from "~/components/PostInfo.vue";
import PostTags from "~/components/PostTags.vue";

export default {
  metaInfo: {
    title: "Blog"
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
    last_from_others() {
      return this.$page.last_from_others.edges.map(e => e.node);
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
  last_from_others: allPrismicPost(filter: { tags: { contains: ["Ostatní"] }}, sortBy: "data.date", order: DESC, limit: 1) {
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
