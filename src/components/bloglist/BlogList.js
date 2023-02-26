import { Link } from 'react-router-dom'
import './bloglist.scss';

const BlogList = ({blogs, title}) => {
    return(
        <div className="bloglist container">
            <h1>{title}</h1>
            {blogs.map(blog => {
                return(
                    <div className="blog-content" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="title">{blog.title}</h2>
                            <h3 className="author">{blog.author}</h3>
                        </Link>
                        <p className="body">{blog.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogList