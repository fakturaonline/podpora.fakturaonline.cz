<template>
  <b-row>
    <b-col
      cols="4"
      v-for="(post, index) in posts"
      :key="index"
      class="article-box"
    >
      <PostCard :post="post" />
    </b-col>
  </b-row>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  props: ["posts"],
  name: "post-collection",
  components: {
    PostCard
  }
};
</script>
