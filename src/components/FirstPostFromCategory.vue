<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <a href="#" @click="$router.push(`/articles/${post.id}`)">
        <img :src="post.data.featured_image.url" class="img-fluid mb-4" />
      </a>
      <div class="post--header">{{ post.data.title }}</div>
      <p class="post--perex">{{ post.data.perex }}</p>
      <p class="post--author">{{ post.data.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  name: "first-post-category"
};
</script>
