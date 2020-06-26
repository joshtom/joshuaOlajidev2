import React from "react";
import "./style.scss";
import Image from '../../images/setup.jpg'
import Github from '../../assets/github.svg'
import View from '../../assets/sid-view.svg'
// const imgBG = `background: url(${Image}) cover cover`
export default function Project() {
    return(
        <div className="projects">
            <h1> Some Selected Projects. </h1>            
        <div className="container">
           <div className="card">
                <header>
                    <img src={Image} alt="showcase1"/>
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">joshuaolajide</a> </h4>
                    <p>portfolio.</p>
                    {/* <p>
                        <Github title="view on github" className="icon"/>
                        <View title="live url" className="icon"/>
                    </p> */}
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
        </div>
    )
}