<template>
  <b-row class="row--sm">
    <b-col
      md="6"
      sm="auto"
      v-for="(post, index) in posts"
      :key="index"
      class="col-flex col--sm"
    >
      <div class="card">
        <PostCard :post="post" />
      </div>
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
