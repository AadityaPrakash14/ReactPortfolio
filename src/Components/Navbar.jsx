import './NavbarStyles.css'
import {Link} from "react-router-dom"
const Navbar = ()=>{

    return (
        <div className='Header'>
            <Link to = "/">
            <h1>Portfolio</h1>
            </Link>
            <ul className='nav-menu'>
                <li><Link to ='/'>home</Link></li>
                <li><Link to ='/contact'>contact</Link></li>
                <li><Link to ='/about'>about</Link></li>
                <li><Link to ='/project'>project</Link></li>
            </ul>
        </div>
    )

}

export default Navbar;
