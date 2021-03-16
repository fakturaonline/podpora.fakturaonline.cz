<template>
  <Layout>
    <b-container>
      <h1 class="mb-4 mt-5">{{ $t("index.news_from_app") }}</h1>
      <PostCollection :posts="posts" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
  metaInfo() {
    return {
      title: this.$i18n.t("meta.news_from_app")
    };
  },
  components: {
    PostCollection
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(e => e.node);
    }
  }
};
</script>

<style scoped></style>

<page-query>
query Post {
  posts: allPrismicPost(filter: { tags: { contains: ["Novinky z aplikace"] }}, sortBy: "data.date", order: DESC) {
    edges {
      node {
        path,
        tags,
        data {
          title
          author
          date
          perex
          featured_image {
            url
          }
          body
        }
      }
    }
  }
}
</page-query>
