<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    ...mapActions({
      fetchPosts: "fetchPosts",
    }),
  },
  computed: {
    ...mapState({
      user: "user",
    }),
    ...mapGetters({
      getPostsCount: "getPostsCount",
      allPosts: "allPosts",
    }),
  },

  async created() {
    this.posts = await this.fetchPosts();
    console.log(this.posts, "this.posts");
  },
};
</script>

<template>
  <div>
    <h1>Helllo</h1>
    <h2>Using State</h2>
    <p>{{ $store.state.user.name }} 🎉 {{ $store.state.user.username }}</p>
    <h4>{{ user.name }}</h4>
    <hr />
    <br />
    <h2>Using Getters</h2>
    <p>{{ $store.getters.getPostsCount }} posts available</p>
    <h4>{{ getPostsCount }}</h4>
    <ul>
      <li v-for="post in $store.state.posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <h5>{{ post.body }}</h5>
        {{ post.id }}
        <br />
        <hr />
      </li>
    </ul>
  </div>
</template>

<style>
</style>