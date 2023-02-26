import {React, useEffect, useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import BlogList from '../../components/bloglist/BlogList'
import useFetch from '../../components/useFetch'

function Home() {
  const url = 'http://localhost:8000/blogs'
  const {data: blogs, error, isLoading} = useFetch(url)

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
    </div>
  )
}

export default Home