import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  
  return (
    <div className="notfound container">
        <h1>404 Page Not Found</h1>
        <Link to='/'>
            go back to homepage
        </Link>
    </div>
  )
}

export default NotFound