<template>
  <Layout>
    <b-jumbotron class="mb-5 light-blue" lead-tag="div">
      <template #lead>
        <b-container>
          <b-row>
            <b-col>
              <h1 class="featured--header">{{ post.data.title }}</h1>
              <p class="post--perex" v-html="post.data.perex" />
            </b-col>
            <b-col>
              <img :src="post.data.featured_image.url" class="img-fluid" />
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container>
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

.light-blue {
  background-color: #f4f9fb;
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
