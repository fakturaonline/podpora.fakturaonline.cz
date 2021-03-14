<template>
  <b-row>
    <b-col cols="4" v-for="(post, index) in posts" :key="index">
      <g-link :to="`/articles/${post.id}`">
        <img :src="post.data.featured_image.url" class="img-fluid mb-4" />
      </g-link>
      <div class="post--header">{{ post.data.title }}</div>
      <p class="post--perex">{{ post.data.perex }}</p>
      <p class="post--author">{{ post.data.author }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["posts"],
  name: "post-collection"
};
</script>
