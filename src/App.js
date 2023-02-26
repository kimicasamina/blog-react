import './scss/main.scss'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import CreateBlog from './pages/createblog/CreateBlog';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogDetails from './components/blogdetails/BlogDetails';
import BlogList from './components/bloglist/BlogList';
import NotFound from './components/NotFound';
import useFetch from './components/useFetch';
function App() {
  const url = 'http://localhost:8000/blogs/'
  const {data: blogs, error, isLoading} = useFetch(url)

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog/>} />
            {/* <Route path="/blogs/" element={blogs && <BlogList blogs={blogs} title='ALL BLOGS'/>} /> */}
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
