<template>
  <Layout>
    <b-container>
      <h1 class="mb-4 mt-5">Aktuality</h1>
      <PostCollection :posts="posts" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
  metaInfo: {
    title: "Aktuality"
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
  posts: allPrismicPost(filter: { tags: { contains: ["Aktuality"] }}, sortBy: "data.date", order: DESC) {
    edges {
      node {
        tags,
        path,
        data {
          title
          date
          author
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
