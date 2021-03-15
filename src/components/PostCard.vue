<template>
  <div>
    <g-link :to="`/articles/${post.id}`">
      <img :src="post.data.featured_image.url" class="img-fluid mb-2" />
    </g-link>

    <PostTags :post="post" />

    <g-link :to="`/articles/${post.id}`">
      <div class="post-title">{{ post.data.title }}</div>
    </g-link>

    <p class="post--perex">
      <g-link :to="`/articles/${post.id}`">{{ post.data.perex }}</g-link>
    </p>

    <PostInfo :post="post" />
  </div>
</template>

<script>
import PostInfo from "~/components/PostInfo.vue";
import PostTags from "~/components/PostTags.vue";

export default {
  props: ["post"],
  name: "post-card",
  components: {
    PostInfo,
    PostTags
  }
};
</script>
