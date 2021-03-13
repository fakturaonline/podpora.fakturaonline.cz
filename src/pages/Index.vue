<template>
  <Layout>
    <b-jumbotron>
      <template #header>
        <b-container>
          BootstrapVue
        </b-container>
      </template>

      <template #lead>
        <b-container>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </b-container>
      </template>

      <b-container>
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-container>
    </b-jumbotron>

    <b-container>
      <PostCollection :posts="posts" />
      <h2>Latest</h2>
      <PostCollection :posts="latest" />
    </b-container>
  </Layout>
</template>

<script>
import PostCollection from "~/components/PostCollection.vue";

export default {
  components: {
    PostCollection
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(e => e.node);
    },
    latest() {
      return this.$page.latest.edges.map(e => e.node);
    }
  }
};
</script>

<style scoped></style>

<page-query>
query Post {
  posts: allPrismicPost(filter: { tags: { contains: ["Featured"] }}) {
    edges {
      node {
        id,
        data {
          title
          author
          perex
          featured_image {
            url
          }
        }

      }
    }
  }
    latest: allPrismicPost(sortBy: "date", order: DESC, limit: 10) {
      edges {
        node {
          id,
          data {
            title
            author
            date
            perex
            featured_image {
              url
            }
          }

        }
      }
    }

}
</page-query>
