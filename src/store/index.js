import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "Cihat Salik",
      email: "fake@email.com",
      username: "YOULOST"
    },
    posts: ['post-1', 'post-2', 'post-3', 'post-4', 'post-5',],
    someString: "etc"
  },
  getters: {
    postsCount(state) {
      return state.posts.length
    },
    postsCountMessage(state, getters) {
      return `${getters.postsCount} posts available.`
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
