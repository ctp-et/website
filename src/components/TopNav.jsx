import { NavLink } from 'react-router-dom';
import './TopNav.css';

function TopNav() {

    function scrollToBottom() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
    }

    function toggleDropdown() {
        var dropdown = document.getElementsByClassName("topnav-dropdown")[0];
        // if (dropdown.style.display === "flex") {
        //     dropdown.style.display = "none";
        // } else {
        //     dropdown.style.display = "flex";
        // }
        dropdown.style.transform = dropdown.style.transform === 'scaleY(1)' ? 'scaleY(0)' : 'scaleY(1)';
    }

    return (
        <nav className="topnav">
            <div className="dropdown-icon" onClick={toggleDropdown}>☰</div>
            <div className="topnav-left">
                <NavLink to="/" className="topnav-link">Home</NavLink>
                <NavLink to="/gallery" className="topnav-link">Gallery</NavLink>
                <NavLink to="/resources" className="topnav-link">Resources</NavLink>
                <NavLink to="/about" className="topnav-link">About</NavLink>
            </div>
            <div className="topnav-right" onClick={scrollToBottom} >
                Contact Us
            </div>
            
            <div className="topnav-dropdown">
                <NavLink to="/" className="topnav-drop-link">Home</NavLink>
                <NavLink to="/gallery" className="topnav-drop-link">Gallery</NavLink>
                <NavLink to="/resources" className="topnav-drop-link">Resources</NavLink>
                <NavLink to="/about" className="topnav-drop-link">About</NavLink>
            </div>
        </nav>
    );
}

export default TopNav;
