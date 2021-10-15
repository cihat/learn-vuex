import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "Cihat Salik",
      email: "fake@email.com",
      username: "YOULOST"
    },
    posts: [
      {
        id: 1,
        title: "Test 1",
        body: "Test 1"
      },
      {
        id: 2,
        title: "Test 2",
        body: "Test 2"
      },
      {
        id: 3,
        title: "Test 3",
        body: "Test 3"
      },
    ],
    postsCount: 0,
    errors: []
  },
  getters: {
    allPosts(state) {
      return state.posts.post
    },
    getPostsCount(state) {
      return state.posts.length
    },
    postsCountMessage(state, getters) {
      return `${getters.postsCount} posts available.`
    }
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload.posts
    },
    INSERT_ERROR(state, error) {
      state.errors.push(error)
    },
    INCREMENT_USER_POSTS_COUNT(state, error) {
      state.user.postsCount++
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
        commit('SET_POSTS', { posts })
      } catch (error) {
        commit('INSERT_ERROR', error)
      }
    }
  },
  modules: {},
});
