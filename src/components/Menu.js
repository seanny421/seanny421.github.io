import React, { Component } from "react";


function Menu( {menu, setMenu} ) {
    function toggleMenu(){
        setMenu(!menu);
    }
    return(
        <div className="menu-container">
            <div onClick={toggleMenu} className={`hamburger-container ${menu ? "change" : ""}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div id="flyoutMenu" className={`${menu ? "show" : ""}`}>
                <h2><a href="./index.html" className="home">Home</a></h2>
                <h2><a href="#">Reminder</a></h2>
                <h2><a href="#">Look At</a></h2>
                <h2><a href="./pom.html">Pomodoro</a></h2>
            </div>
        </div>
    );
};
export default Menu;