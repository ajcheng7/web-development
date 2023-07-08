import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDTAMs4XTRIjO5sYVoIi3honkdNEFcLb1Y",
  authDomain: "fir-9-dojo-44ece.firebaseapp.com",
  projectId: "fir-9-dojo-44ece",
  storageBucket: "fir-9-dojo-44ece.appspot.com",
  messagingSenderId: "428813948395",
  appId: "1:428813948395:web:afedf1089dcb48651275ae"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'blogs')

// queries
const q = query(colRef, where("author", "==", "margaret mitchell"), orderBy('title', 'desc'));

// get collection data

onSnapshot(q, (snapshot)=> {
  let blogs = []
  snapshot.docs.forEach(doc => {
    blogs.push({ ...doc.data(), id: doc.id })
  })
  console.log(blogs)
})
// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  // stop the form from reloading which is the default behavior
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
    .then(() => {
      // clears out the form
      addBookForm.reset();
    })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const docRef = doc(db, 'blogs', deleteBookForm.id.value);

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset();
    }) 

})