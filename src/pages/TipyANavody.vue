<template>
  <Layout>
    <b-container>
      <h1 class="mb-4 mt-5">Tipy a návody</h1>
      <PostCollection :posts="posts" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
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
  posts: allPrismicPost(filter: { tags: { contains: ["Tipy a návody"] }}) {
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
          body
        }

      }
    }
  }
}
</page-query>
