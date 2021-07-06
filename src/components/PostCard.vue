<template>
  <div>
    <g-link :to="post.path">
      <img :src="post.data.featured_image.url" class="img-fluid" />
    </g-link>
    <div class="postcard__content">
      <PostTags :post="post" />

      <g-link :to="post.path">
        <h4 class="h4">{{ post.data.title }}</h4>
      </g-link>

      <PostInfo :post="post" />

      <p>{{ post.data.perex }}</p>

      <g-link :to="post.path" class="link link--postcard">
        <span>
        Přečíst článek
        </span>
      </g-link>
    </div>
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
