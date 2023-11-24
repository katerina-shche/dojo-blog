<template>
  <div class="post-list">
    <h1>Post list</h1>
    <div v-for='post in posts' :key='post.id'>
        <SinglePost :post='post'/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    components: { SinglePost },
    props: ['posts'],
    setup(props) {
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    }
}
</script>

<style>

</style>