<template>
  <Layout>
    <div class="posts--container">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="post--card"
        @click="$router.push(`/posts/${post.id}`)"
      >
        <img :src="post.data.featured_image.url" />
        <div class="post--header">{{ post.data.title }}</div>
      </div>
    </div>
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
  posts: allPrismicPost(filter: { tags: { contains: ["Aktuality"] }}) {
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
