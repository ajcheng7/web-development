import BlogList from './BlogList';
import useFetch from "./useFetch";
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, collection, getDocs
} from 'firebase/firestore'


const Home = () => {
    // e is a default parameter describing the event object
    // array destructuring to get two values, name of var and func to change it
    
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    const firebaseConfig = {
        apiKey: "AIzaSyDTAMs4XTRIjO5sYVoIi3honkdNEFcLb1Y",
        authDomain: "fir-9-dojo-44ece.firebaseapp.com",
        projectId: "fir-9-dojo-44ece",
        storageBucket: "fir-9-dojo-44ece.appspot.com",
        messagingSenderId: "428813948395",
        appId: "1:428813948395:web:afedf1089dcb48651275ae"
      };
      
    // initialize firebase app
    initializeApp(firebaseConfig);
    
    // init services
    const db = getFirestore();
    
    // collection ref
    const colRef = collection(db, 'blogs')
      
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // get collection data
    // getDocs(colRef)
    //     .then((snapshot) => {
    //         let data = [];
    //         snapshot.docs.forEach((doc) => {
    //             data.push({ ...doc.data(), id: doc.id });
    //         })
    //         console.log(data);
    //         setBlogs(data);
    //         setIsPending(false);
    //         setError(null)
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     });      


    useEffect(() => {
        const fetchData = async () => {
          try {
            const snapshot = await getDocs(colRef);
            const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
          } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
          }
        };
    
        fetchData();
      }, []);
   
    
    return (
        <div className="home">
            {/* by passing in the blogs components we can now use this code anywhere */}
            {/* we can also pass in functions as props */}
            {/* if we use this logic then eval left to make sure there is data in blogs */}
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
}

export default Home;