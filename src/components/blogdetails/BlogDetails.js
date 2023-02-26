import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import { useNavigate } from 'react-router-dom'
import './blogdetails.scss'

function BlogDetails() {
    const url = 'http://localhost:8000/blogs/'
    const {id} = useParams()
    const {data: blog, error, isLoading} = useFetch(url + id)
    const navigate = useNavigate()

    const handleDelete = () => {
      const url = 'http://localhost:8000/blogs/'
      fetch(url + blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/')
      })
    }
  return (
    <div className="blog-details container">
        {isLoading && <div>Loading</div>}
        {error && <div>{error}</div>}
        {blog && 
          <article>
            <h2 className='title'>{blog.title}</h2>
            <h3 className='author'>{blog.author}</h3>
            <p className='body'>{blog.body}</p>
            <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
          </article>
        }
    </div>
  )
}

export default BlogDetails