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
        getDoc(docRef)
        .then(doc => {
          if (!doc.exists()) {
            throw new Error('Sorry, but it seems: this post does not exist ;(')
          }
        })
       .catch(err => {console.log(err.message)
        error.value = err.message
       })

        const unsubDoc = onSnapshot(docRef, (doc) => {
          console.log('doc snap is:', doc)
          
          post.value = { ...doc.data(), id: doc.id}
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