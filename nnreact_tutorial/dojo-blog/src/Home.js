import { useEffect, useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    // e is a default parameter describing the event object
    // array destructuring to get two values, name of var and func to change it
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ]);

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // be careful changing state in useEffect bc might be an infinite loop
    // no dependency array so it will only run once
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        // fires when promise has resolved, data is returned
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for that resource');
                    }
                    return res.json();
                })
                // data is what's inside json
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                // network error 
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
    }, [])

    // create the function here instead of blogList so we can directly edit the data
    // then pass in the edited data as a prop
    // const handleDelete = (id) => {
    //     // doesn't change the original data, returns new
    //     const newBlogs = blogs.filter(blog=> blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
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