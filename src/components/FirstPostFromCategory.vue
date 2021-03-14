<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <g-link :to="`/articles/${post.id}`">
        <img :src="post.data.featured_image.url" class="img-fluid mb-4" />
      </g-link>
      <div class="font-weight-bold">{{ post.data.title }}</div>
      <p class="post--perex">{{ post.data.perex }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  name: "first-post-category"
};
</script>
