<template>
  <Layout>
    <section class="section section--bg-blue">
      <b-container fluid="xl">
        <h1 class="mb-4">{{ $t("meta.profile") }}</h1>
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
      title: this.$i18n.t("meta.profile")
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
  posts: allPrismicPost(filter: { tags: { contains: ["Správa profilu"] }}, sortBy: "data.date", order: DESC) {
    edges {
      node {
        path,
        tags,
        data {
          title
          author
          date
          perex
          body
        }
      }
    }
  }
}
</page-query>
