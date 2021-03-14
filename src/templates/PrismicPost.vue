<template>
  <Layout>
    <b-container>
      <b-row>
        <b-col>
          <h1>{{ post.data.title }}</h1>
          <div v-html="post.data.perex"></div>
          <div v-html="post.data.author"></div>
        </b-col>
        <b-col>
          <img :src="post.data.featured_image.url" />
        </b-col>
      </b-row>
      <slices-block :slices="post.data.body" />
    </b-container>
  </Layout>
</template>

<script>
import SlicesBlock from "~/components/SlicesBlock.vue";
export default {
  components: {
    SlicesBlock
  },
  computed: {
    post() {
      const node = this.$page.post;
      const { body, ...remainingObject } = node.data;
      return {
        data: { ...remainingObject, body: JSON.parse(body) }
      };
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
<page-query>
  query PrismicPost ($id: ID!) {
    post: prismicPost (id: $id) {
      data {
          title
          author
          perex
          featured_image {
            url
          }
          body
      }
    }
  }
</page-query>
