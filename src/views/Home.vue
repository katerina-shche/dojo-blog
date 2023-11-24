<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if='error'>{{error}}</div>
    <PostList v-if='posts.length' :posts='posts'/>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'



export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const {posts, error, load } = getPosts()
  
    load()

    return { posts, error }
  }
}
</script>
