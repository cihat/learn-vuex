<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      user: "user",
    }),
    ...mapGetters({
      postsCount: "postsCount",
    }),
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
    <p>{{ $store.getters.postsCount }} posts available</p>
    <h4>{{ postsCount }}</h4>
  </div>
</template>

<style>
</style>