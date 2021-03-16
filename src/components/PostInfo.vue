<template>
  <small class="text-muted">
    {{ $t("post_info.from") }}
    {{ post.data.author }} | {{ post.data.date | formatDate }} |
    {{ readingTime }} {{ $t("post_info.min_reads") }}</small
  >
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
