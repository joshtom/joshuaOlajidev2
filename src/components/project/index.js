import React from "react";
import { Url } from './url'
import { Github } from './github'
import "./style.scss";

const Project = () =>{
    return(
        <div className="projects" id="project">
            
            <h1 className="project-title"> Projects. </h1>            
            <p className="project-subtitle"> I <b>design</b> and <b>Build</b> web Applications. </p>
        <div className="container">
           <div className="card" >
                <h1> Joshua <br /> Olajide.</h1>
                <a href="https://joshuaolajide.netlify.app/" target="_blank" rel="noreferrer" className="card-link"> portfolio </a>
                <div className="image-links">
                    <a href="https://github.com/joshtom/joshuaOlajidev2" target="_blank" rel="noreferrer"><Github /></a>
                </div>  
           </div>
           <div className="card" >
                <h1> Feeling <br /> Pressed.</h1>
                <a href="https://feeling-pressed.netlify.app/" target="_blank" rel="noreferrer" className="card-link"> blog </a>
                <div className="image-links">
                <a href="https://github.com/joshtom/feeling-pressed" target="_blank" rel="noreferrer"><Github /></a>
                    
                </div>  
           </div>
           <div className="card" >
                <h1> Serv- <br /> iceMart.</h1>
                <a href="https://service-mart.netlify.app/" target="_blank" rel="noreferrer" className="card-link"> investment </a>
                <div className="image-links">
                    {/* <Github /> */}
                </div>  
           </div>
           <div className="card" >
                 <h1> Dev <br /> Alert.</h1>
                 <a href="https://devalert.me" target="_blank" rel="noreferrer" className="card-link"> Jobs </a>
                <div className="image-links">
                    
                </div>  
           </div>
           <div className="card" >
                  <h1> Covid <br /> Report.</h1>
                  <a href="https://dsc-covid19.netlify.app/" target="_blank" rel="noreferrer" className="card-link"> healthcare </a>
                <div className="image-links">                    
                </div>  
           </div>
           <div className="card" >
                 <h1> Conn- <br /> ect Four.</h1>
                 <a href="https://joshtom.github.io/connect-four-game/" target="_blank" rel="noreferrer" className="card-link"> fun game </a>
                <div className="image-links">
                <a href="https://github.com/joshtom/connect-four-game" target="_blank" rel="noreferrer"> <Github /> </a>
                </div>  
           </div>
        </div>        
        </div>
    )
}

export default Project
