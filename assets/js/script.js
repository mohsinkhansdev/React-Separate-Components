//React Using import Libraries

import React from "react"
import ReactDOM from "react-dom"
import Header  from "./Header"
import Footer from "./Footer"
import MainBody from "./MainBody"


function Page(){
    return(
    <div> 
        <Header />
        <MainBody />
        <Footer />
    </div>
    )
}

ReactDOM.render(
    <Page /> 
    ,
    document.getElementById("root")
)

/* const page = (
    <div>
        <img src="assets/img/react-logo.png" style="width: 15%;"/>
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was rirst released in 2013</li>
            <li>Was originally created by jordan walke </li>
            <li>Has well over 100k starts on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
    </div>
)

ReactDOM.render(
    page
    ,
    document.getElementById("root")
) */




