<template>
  <b-row>
    <b-col cols="4" v-for="(post, index) in posts" :key="index">
      <a href="#" @click="$router.push(`/posts/${post.id}`)">
        <img :src="post.data.featured_image.url" class="img-fluid" />
      </a>
      <div class="post--header">{{ post.data.title }}</div>
      <p class="post--perex">{{ post.data.perex }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["posts"],
  name: "post-collection"
};
</script>
