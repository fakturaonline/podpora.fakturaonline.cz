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
      <b-row>
        <b-col cols="4" v-for="(post, index) in posts" :key="index">
          <a href="#" @click="$router.push(`/posts/${post.id}`)">
            <img :src="post.data.featured_image.url" class="img-fluid" />
            <div class="post--header">{{ post.data.title }}</div>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
export default {
  computed: {
    posts() {
      const nodes = this.$page.posts.edges.map(e => e.node);

      return nodes.map(node => {
        const { body, ...remainingObject } = node.data;
        return {
          id: node.id,
          data: { ...remainingObject, body: JSON.parse(body) }
        };
      });
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
          timeread
          perex
          featured_image {
            url
          }
          body
        }

      }
    }
  }
}
</page-query>
