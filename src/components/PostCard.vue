<template>
  <div>
    <div class="postcard__content">
      <PostTags :post="post" />

      <g-link :to="post.path">
        <h4 class="h4">{{ post.data.title }}</h4>
      </g-link>

      <PostInfo :post="post" />

      <p>{{ post.data.perex }}</p>

      <g-link :to="post.path" class="link link--postcard">
        <span>
        {{ $t("index.read_article") }}
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
