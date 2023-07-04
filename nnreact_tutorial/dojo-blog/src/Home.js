import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // e is a default parameter describing the event object
    // array destructuring to get two values, name of var and func to change it
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    // // create the function here instead of blogList so we can directly edit the data
    // // then pass in the edited data as a prop
    const handleDelete = (id) => {
        // doesn't change the original data, returns new
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }

    // // be careful changing state in useEffect bc might be an infinite loop
    useEffect(() => {
        console.log('use effect ran');
        // console.log(blogs);
        console.log(name);
    }, [name]);
    
    return (
        <div className="home">
            {/* by passing in the blogs components we can now use this code anywhere */}
            {/* we can also pass in functions as props */}
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
           <button onClick={() => setName('luigi')}>change name</button>
           <p>{ name }</p>
           {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
    );
}

export default Home;