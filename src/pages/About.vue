<template>
  <Layout>
    <section class="section section--bg-blue">
      <b-container fluid="xl">
        <h1 class="mb-4">{{ $t("meta.about") }}</h1>
        <PostCollection :posts="posts" />
      </b-container>
    </section>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
  metaInfo() {
    return {
      title: this.$i18n.t("meta.about")
    };
  },
  components: {
    PostCollection
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(e => e.node);
    }
  }
};
</script>

<style scoped></style>

<page-query>
query Post {
  posts: allPrismicPost(filter: { tags: { contains: ["O FakturaOnline.cz"] }}, sortBy: "data.date", order: DESC) {
    edges {
      node {
        tags,
        path,
        data {
          title
          date
          author
          perex
          body
        }
      }
    }
  }
}
</page-query>
