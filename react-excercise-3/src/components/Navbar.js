import React from "react"
import "../index.css"

function Navbar(){

    return(
    <div class="nav">
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Weather</a></li>
            <li><a href="contact.asp">Traffic</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
    </div>
    )
}

export default Navbar