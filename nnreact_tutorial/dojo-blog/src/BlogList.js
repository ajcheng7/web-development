import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {
    // allows us to pass in data from the home.js file
    // instead of doing it like this (below), we can destructure data in the parameter
    // const blogs = props.blogs;
    // const title = props.title;

    console.log(blogs);
 
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                // console.log(blog.author)
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: { blog.author }</p>
                    </Link>
                    
                </div>
            ))}
        </div>

     );
}
 
export default BlogList;