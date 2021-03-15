<template>
  <Layout>
    <b-jumbotron class="mb-5 light-blue" lead-tag="div">
      <template #lead>
        <b-container>
          <b-row>
            <b-col>
              <h1 class="featured--header">{{ post.data.title }}</h1>
              <p class="post--perex" v-html="post.data.perex" />
              <PostTags :post="$page.post" />
              <PostInfo :post="$page.post" />
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
import PostInfo from "~/components/PostInfo.vue";
import PostTags from "~/components/PostTags.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.post.data.title,
      meta: [
        { name: "description", content: this.$page.post.data.perex },
        { property: "og:title", content: this.$page.post.data.title },
        { property: "og:site_name", content: "Blog.FakturaOnline" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: this.$page.post.data.featured_image.url
        },
        { name: "robots", content: "index,follow" },
        { name: "author", content: this.$page.post.data.author }
      ]
    };
  },
  components: {
    SlicesBlock,
    PostTags,
    PostInfo
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
      tags,
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
