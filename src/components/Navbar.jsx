import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {

    componentDidMount(){
        const menuToggle = document.querySelector("#menu-toggle");
        const activeElements = document.querySelectorAll(".active-element");
        const mainLogo = document.querySelector(".brand");
        mainLogo.style.zIndex = "3000";
 

        const toggledMenu = menuToggle.addEventListener("click", () => {
            for(let i = 0; i < activeElements.length; i++) {
                activeElements[i].classList.toggle("active");
            }
        });
    }

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="brand">
                        <a href="/"><img src="./logo.png"></img></a>
                    </div>
                    {/* Nav Menu */}
                    <div className="masthead active-element">
                        <div id="menu-toggle" class="menu-toggle active-element">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </div>
                    {/* Nav Links */}
                    <div className="main-nav-list active-element">
                        <ul>
                            <li><a href="/">Demo Reel</a></li>
                            <li><a href="/">Faces</a></li>
                            <li><a href="/" className="mobile-hide">Blog</a></li>
                            <li><a href="/" className="active-link">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
