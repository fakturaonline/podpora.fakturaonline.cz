<template>
  <div class="postinfo">
    <small class="text-muted">
      <span class="text-primary">{{ post.data.author }}</span>&nbsp;<span class="postinfo__divider"> · </span> {{ post.data.date | formatDate }} <span class="postinfo__divider">·</span>
      {{ readingTime }} {{ $t("post_info.min_reads") }}</small
    >
  </div>
</template>

<script>
import { RichText } from "prismic-dom";

export default {
  props: ["post"],
  name: "post-info",
  computed: {
    readingTime() {
      const content = JSON.parse(this.post.data.body);
      const texts = content.find(node => node.slice_type == "text");
      const plainText = RichText.asText(texts.primary.text);
      let minutes = 0;
      const words = plainText.split(" ").length;
      const wordsPerMinute = 250;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    }
  }
};
</script>
