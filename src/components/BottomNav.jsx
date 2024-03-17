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
                Stay informed about announcements and updates by joining our <u><a href="https://t.me/ctpethiopia">Telegram channel</a></u> and following our <u><a href="https://www.instagram.com/ctpethiopia/">Instagram page</a></u>.
            </p>
        </div>
    </footer>
  );
} 

export default BottomNav;