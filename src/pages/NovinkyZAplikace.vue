<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
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

<style scoped>
.posts--container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.post--card {
  width: 300px;
  cursor: pointer;
  border-radius: 10px;
  -webkit-box-shadow: -4px 40px 53px -7px rgba(224, 215, 224, 1);
  -moz-box-shadow: -4px 40px 53px -7px rgba(224, 215, 224, 1);
  box-shadow: -4px 40px 53px -7px rgba(224, 215, 224, 1);
  margin-bottom: 30px;
}

.post--card img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.post--card .post--header {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<page-query>
query Post {
  posts: allPrismicPost(filter: { tags: { contains: ["Novinky z aplikace"] }}) {
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
