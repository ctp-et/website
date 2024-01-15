import React from "react";
import './BottomNav.css';

function BottomNav() {
  return (
    <footer className="bottom-nav">
        <div>
            <h2 className="crimson-text">CTP ETHIOPIA</h2>
            <hr />
            <p>
                Got questions? Contact us at <b>ctpethio@gmail.com</b>.
                <br />
                <br />
                Stay informed on news and updates by joining our Telegram Channel here: <b><a href="https://t.me/ctpethiopia">Channel link</a></b>
            </p>
        </div>
    </footer>
  );
} 

export default BottomNav;