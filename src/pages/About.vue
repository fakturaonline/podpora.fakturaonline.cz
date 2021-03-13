<template>
  <Layout>
    <h1>This is the About Page</h1>
  </Layout>
</template>

<script>
export default {
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
  posts: allPrismicPost {
    edges {
      node {
        id,
        data {
          title
          author
          timeread
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
