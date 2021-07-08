<template>
  <Layout>
    <CtaAside />
    <article class="article">
      <div class="article__jumbotron">
        <b-container class="container--article">
          <div class="section section--article-jumbotron">
            <PostTags :post="$page.post" />
            <h1 class="h1">{{ post.data.title }}</h1>
            <PostInfo :post="$page.post" />
            <img :src="post.data.featured_image.url" class="article__lead-image" />
          </div>
        </b-container>
      </div>
      <b-container class="container--article">
        <p class="article__perex" v-html="post.data.perex" />
        <slices-block :slices="post.data.body" />
      </b-container>
    </article>
  </Layout>
</template>

<script>
import SlicesBlock from "~/components/SlicesBlock.vue";
import PostInfo from "~/components/PostInfo.vue";
import PostTags from "~/components/PostTags.vue";
import CtaAside from "~/components/CtaAside.vue";

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
    PostInfo,
    CtaAside
  },
  computed: {
    post() {
      const node = this.$page.post;
      const { body, ...remainingObject } = node.data;
      return {
        data: { ...remainingObject, body: JSON.parse(body) }
      };
    },
    billIcon: function() {
      return require("!!assets-loader?width=57&quality=100&fit=inside!~/" +
        `bill-icon.svg`);
    },
  }
};
</script>

<page-query>
  query PrismicPost ($id: ID!) {
    post: prismicPost (id: $id) {
      tags,
      data {
          title
          author
          date
          perex
          featured_image {
            url
          }
          body
      }
    }
  }
</page-query>
