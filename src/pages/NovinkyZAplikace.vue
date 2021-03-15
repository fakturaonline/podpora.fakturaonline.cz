<template>
  <Layout>
    <b-container>
      <h1 class="mb-4 mt-5">Novinky z aplikace</h1>
      <PostCollection :posts="posts" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
  metaInfo: {
    title: "Novinky z aplikace"
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
  posts: allPrismicPost(filter: { tags: { contains: ["Novinky z aplikace"] }}) {
    edges {
      node {
        id,
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
