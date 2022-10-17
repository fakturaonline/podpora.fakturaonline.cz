<template>
  <div>
    <b-badge
      v-for="(tag, index) in displayTags"
      variant="secondary"
      :key="index"
    >
      {{ $t(`tags.${tag}`) }}
    </b-badge>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  props: ["post"],
  name: "post-tags",
  computed: {
    displayTags() {
      return this.post.tags
        .filter(item => item !== "Featured")
        .map(item => slugify(item, { remove: /[*+~.()'"!:@]/g, lower: true }));
    }
  }
};
</script>
