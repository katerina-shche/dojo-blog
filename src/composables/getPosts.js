import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import {
  collection, 
  getDocs,
  onSnapshot,
  // addDoc, deleteDoc, doc,
  // query, where,
  // orderBy, serverTimestamp,
  // getDoc, updateDoc
} from 'firebase/firestore'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        const colRef = collection(projectFirestore, 'posts')
        // const res = getDocs(colRef)
        // .then((snapshot) => {
        //       snapshot.docs.forEach((doc) => {
        //           posts.value.push({ ...doc.data(), id: doc.id })
        //       })
        //       console.log(posts)
        //     })

          const unsubCol = onSnapshot(colRef, (snapshot) => {
            let newPosts = []
            snapshot.docs.forEach((doc) => {
              newPosts.push({ ...doc.data(), id: doc.id })
            })
            posts.value = newPosts
          })
        
      }
      catch (err) {
        error.value = err.message
        console.log(error.value) 
      }
    }
    return { posts, error, load }
}

export default getPosts