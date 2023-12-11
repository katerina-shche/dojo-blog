<template>
  <div class='tag'>
    <h1>TagPosts: #{{ tag }}</h1>
    <div v-if='error'>{{error}}</div>
    <div v-if='posts.length' class='layout'>
        <PostList v-if='tagPosts.length' :posts='tagPosts'/>
        <TagCloud :posts='posts' />
    </div>
    <div v-else>
        <Spinner />
        </div>
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts'
import { computed } from 'vue'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
    name: 'Tag',
    props: ['tag'],
    components: { PostList, Spinner, TagCloud },
    setup(props) {
    console.log(props.tag)
        const { posts, error, load } = getPosts()

        load()
        console.log(posts)
        const tagPosts = computed(() => {
            return posts.value.filter(post => post.tags.includes(props.tag))
        }) 

        return {
            error, tagPosts, posts
        }

}


}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>