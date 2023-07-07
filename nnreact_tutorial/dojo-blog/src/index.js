import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyDTAMs4XTRIjO5sYVoIi3honkdNEFcLb1Y",
  authDomain: "fir-9-dojo-44ece.firebaseapp.com",
  projectId: "fir-9-dojo-44ece",
  storageBucket: "fir-9-dojo-44ece.appspot.com",
  messagingSenderId: "428813948395",
  appId: "1:428813948395:web:afedf1089dcb48651275ae"
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// initialize firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'blogs')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let blogs = [];
    snapshot.docs.forEach((doc) => {
      blogs.push({ ...doc.data(), id: doc.id });
    })
    console.log(blogs);
  })
  .catch(err => {
    console.log(err.message);
  })