import {Link} from 'react-router-dom';

export default function Header() {    
    return (
            <nav id='nav-bar'>
                <Link to="/" className = "link-item">HOME</Link>
                <Link to= "/about" className = "link-item">ABOUT</Link>
                <Link to= "/summary" className = "link-item">SUMMARY</Link>
                <Link to="/add" className = "link-item"><button className='nav-bar-button'>ADD</button></Link>
            </nav>
    )
}   