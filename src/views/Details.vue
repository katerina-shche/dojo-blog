<template>
  <div v-if="error">{{error}}</div>
  <div v-if='post' class='post'>
    <h3>{{ post.title }}</h3>
    <p class='pre'>{{ post.body }}</p>
    <button class="delete" @click="handleClick">delete post</button>
    <span v-for='tag in post.tags' :key='tag'>
      <router-link :to='{ name: "Tag", params: {tag: tag} }'>
        #{{ tag }}
      </router-link>
    </span>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost  from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'
import {
  collection, 
  //getDocs,
  //onSnapshot,
  //getDoc,
  doc,
  // addDoc, 
  deleteDoc,
  // query, where,
  // orderBy, serverTimestamp,
  // updateDoc
} from 'firebase/firestore'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        console.log(route)

        const { post, error, load } = getPost(route.params.id)

        load()

        const handleClick = async () => {
          const docRef = doc(projectFirestore, 'posts', props.id)
          deleteDoc(docRef)
            .then(router.push({ name: 'Home' }))
            .catch(err => error.value = err.message)
        }
        return { post, error, handleClick }
    }
}
</script>

<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
    button.delete {
      margin: 10px auto;
      cursor: pointer;
    }
</style>