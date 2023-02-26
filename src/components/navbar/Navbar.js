import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return(
        <header className="header">
            <nav className="navbar container">
                <div className="branding">
                    <h1>Blog</h1>
                </div>
                <ul className="nav-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar