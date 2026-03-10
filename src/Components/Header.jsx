import {Link} from 'react-router-dom';

export default function Header() {    
    return (
            <nav id='nav-bar'>
                <Link to="/" class = "link-item">HOME</Link>
                <Link to= "/about" class = "link-item">ABOUT</Link>
                <Link to= "/summary" class = "link-item">SUMMARY</Link>
                <Link to="/add" class = "link-item"><button className='nav-bar-button'>ADD</button></Link>
            </nav>
    )
}   