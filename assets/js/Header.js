
import React from "react"

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="nav-logo" src="assets/img/react-logo.png"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </nav>
        </header>
    )
}
