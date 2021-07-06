<template>
  <div>
    <div v-for="(post, index) in posts" :key="index" class="article-preview">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  props: ["posts"],
  name: "first-post-category",
  components: {
    PostCard
  }
};
</script>
