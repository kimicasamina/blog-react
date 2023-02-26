import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './createblog.scss'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        console.log(blog)
        setIsPending(true)
        
        const url = 'http://localhost:8000/blogs/'
        setTimeout(() => {
            fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(res => {
                console.log("Blog is added")
                setIsPending(false)
                navigate('/')
            })
        }, 1000)
    }

    return(
        <div className="createblog">  
            <div className="container">
                <h1>Add a new blog</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="form__control">
                        <label>Title</label>    
                        <input 
                        className="form__title"
                        type="text"
                        required
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        />
                    </div>

                    <div className="form__control">
                        <label>Body</label>
                        <textarea 
                        className="form__body" 
                        required 
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                        >

                        </textarea>
                    </div>

                    <div className="form__control">
                        <label>Author</label>
                        <select className='form__author' onChange={(e) => {
                            setAuthor(e.target.value)
                        }}>
                            <option value="Mario">Mario</option>
                            <option value="Luigi">Luigi</option>
                        </select>
                    </div>

                    {!isPending &&  <button className="btn submit-btn">Add a Blog</button>}
                    {isPending &&  <button className="btn submit-btn">Adding a blog</button>}
                </form>
            </div>   
        </div>
    )
}

export default CreateBlog