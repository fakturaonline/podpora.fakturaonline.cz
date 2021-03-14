<template>
  <Layout>
    <b-jumbotron class="mb-5 light-blue" lead-tag="div">
      <template #lead>
        <b-container>
          <b-row>
            <b-col>
              <h1 class="featured--header">{{ featured.data.title }}</h1>
              <p class="featured--perex" v-html="featured.data.perex" />
              <PostInfo :post="featured" />
            </b-col>
            <b-col>
              <g-link :to="`/articles/${featured.id}`">
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
        <b-col>
          <a class="h3 mb-3 d-block" :href="$url('/aktuality')"
            >Aktuality
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_news_aktuality" />
        </b-col>
        <b-col>
          <a class="h3 mb-3 d-block" :href="$url('/novinky-z-aplikace')"
            >Novinky z aplikace
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_news_from_app" />
        </b-col>
        <b-col>
          <a class="h3 mb-3 d-block" :href="$url('/tipy-a-navody')"
            >Tipy a návody
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_tuts" />
        </b-col>
        <b-col>
          <a class="h3 mb-3 d-block" :href="$url('/ostatni')"
            >Ostatní
            <g-image alt="Example image" src="~/chevron-right.svg" />
          </a>
          <FirstPostFromCategory :posts="last_from_others" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <hr />
      <h2 class="mb-3 d-block">Nejnovější články</h2>
      <PostCollection :posts="latest" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";
import FirstPostFromCategory from "~/components/FirstPostFromCategory.vue";
import PostInfo from "~/components/PostInfo.vue";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostCollection,
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
  last_from_news_from_app: allPrismicPost(filter: { tags: { contains: ["Novinky z aplikace"] }}, order: DESC, limit: 1) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_news_aktuality: allPrismicPost(filter: { tags: { contains: ["Aktuality"] }}, order: DESC, limit: 1) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_others: allPrismicPost(filter: { tags: { contains: ["Ostatní"] }}, order: DESC, limit: 1) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }
      }
    }
  }
  last_from_tuts: allPrismicPost(filter: { tags: { contains: ["Tipy a návody"] }}, order: DESC, limit: 1) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }
      }
    }
  }
  featured: allPrismicPost(filter: { tags: { contains: ["Featured"] }}, order: DESC, limit: 1) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }
      }
    }
  }
  latest: allPrismicPost(sortBy: "date", order: DESC, limit: 10) {
    edges {
      node {
        id,
        data {
          title
          author
          date
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
