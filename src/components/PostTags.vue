<template>
  <div>
    <b-badge
      v-for="(tag, index) in displayTags"
      variant="secondary"
      :key="index"
      class="mt-2 mb-2"
    >
      {{ tag }}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: ["post"],
  name: "post-tags",
  computed: {
    displayTags() {
      return this.post.tags.filter(item => item !== "Featured");
    }
  }
};
</script>
