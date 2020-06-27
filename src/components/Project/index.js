import React from "react";
import "./style.scss";
import Image from '../../images/setup.jpg'
import Github from '../../assets/github.svg'
import View from '../../assets/sid-view.svg'
// const imgBG = `background: url(${Image}) cover cover`
export default function Project() {
    return(
        <div className="projects">
            <h1> Projects. </h1>            
            <p> Some selected projects I have worked on. </p>
        <div className="container">
           <div className="card">
                <header>
                    <img src={Image} alt="showcase1"/>
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">joshuaolajide</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>portfolio.
                    
                    </p>
                </footer>
           </div>
           <div className="card">

           </div>
           <div className="card">

           </div>
           <div className="card">

           </div>
           <div className="card">

           </div>
           <div className="card">

           </div>
        </div>
        <center><button> View More </button> </center>
        </div>
    )
}