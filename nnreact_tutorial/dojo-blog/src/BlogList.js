const BlogList = ({blogs, title}) => {
    // allows us to pass in data from the home.js file
    // instead of doing it like this (below), we can destructure data in the parameter
    // const blogs = props.blogs;
    // const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>

     );
}
 
export default BlogList;