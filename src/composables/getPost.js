import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import {
  collection, 
  getDocs,
  onSnapshot,
  getDoc, doc,
  // addDoc, deleteDoc,
  // query, where,
  // orderBy, serverTimestamp,
  // updateDoc
} from 'firebase/firestore'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        const docRef = doc(projectFirestore, 'posts', id)
        
        const unsubDoc = onSnapshot(docRef, (doc) => {
          if (!doc.exists()) {
            throw new Error("That post does not exist")
          } 
          post.value = { ...doc.data(), id: doc.id} },
          (err) => {
            // Handle the error from onSnapshot
            error.value = err.message
            console.error(error.value)
          })
         
      }
      catch (err) {
        error.value = err.message
        console.log(error.value) 
      }
    }
    return { post, error, load }
}

export default getPost