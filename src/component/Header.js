import React from "react";
import './sass/header.css';


const Header=()=>{
    return (
        <>
    <header className="header">
        <div className="logo">
            <div className="logo-square"></div>
            <div className="logo-text"><h2>Dazzie</h2></div>
        </div>
        <div className="user-info">
            <div className="notification-bell">
                <img src="./images/Notification Bell.svg" alt="" />
            </div>
            <div className="user-details">
                <div className="user-circle"></div>
                <div className="user-name">
                    <h3>Sumanto</h3>
                    <p>Cashier</p>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}

export default Header;