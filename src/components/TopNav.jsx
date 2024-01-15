import { NavLink } from 'react-router-dom';
import './TopNav.css';

function TopNav() {

    function scrollToBottom() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
    }

    return (
        <div className="topnav">
            <div className="topnav-left">
                <NavLink to="/" className="topnav-link">Home</NavLink>
                <NavLink to="/gallery" className="topnav-link">Gallery</NavLink>
                <NavLink to="/resources" className="topnav-link">Resources</NavLink>
                <NavLink to="/about" className="topnav-link">About</NavLink>
            </div>
            <div className="topnav-right" onClick={scrollToBottom} >
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
}

export default TopNav;
