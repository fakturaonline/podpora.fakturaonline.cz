<template>
  <b-row>
    <b-col cols="4" v-for="(post, index) in posts" :key="index">
      <g-link :to="`/articles/${post.id}`">
        <img :src="post.data.featured_image.url" class="img-fluid mb-4" />
      </g-link>
      <div class="font-weight-bold">{{ post.data.title }}</div>
      <p class="post--perex">{{ post.data.perex }}</p>
      <PostInfo :post="post" />
    </b-col>
  </b-row>
</template>

<script>
import PostInfo from "~/components/PostInfo.vue";

export default {
  props: ["posts"],
  name: "post-collection",
  components: {
    PostInfo
  }
};
</script>
