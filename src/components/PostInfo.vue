<template>
  <small class="text-muted"
    >Od {{ post.data.author }} | {{ post.data.date }}</small
  >
</template>

<script>
export default {
  props: ["post"],
  name: "post-info",
  computed: {
    readingTime() {
      let minutes = 0;
      const contentString = JSON.stringify(this.post.data.body[0].primary.text);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 200;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    }
  }
};
</script>
