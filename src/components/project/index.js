import React, { useEffect, useRef, useState } from "react";
import { Url } from '../url'
import { Github } from '../github'
import "./style.scss";

const Project = ({ data }) =>{
    const [isToggle, setIsToggle] = useState(true);
    const card = useRef(null);
    const cards = useRef(null);
    const cardss = useRef(null);

    return(
        <div className="projects" id="project">
            
            <h1 className="project-title"> Projects. </h1>            
            <p className="project-subtitle"> I <b>design</b> and <b>Build</b> web Applications. </p>
        <div className="container">
           <div className="card">
                <h1> Joshua <br /> Olajide.</h1>
                <p> portfolio </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card">
                <h1> Feeling <br /> Pressed.</h1>
                <p> blog </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card">
                <h1> Serv- <br /> iceMart.</h1>
                <p> investment </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" ref={card}>
                 <h1> Dev <br /> Alert.</h1>
                <p> jobs </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" ref={cards}>
                  <h1> Covid <br /> Report.</h1>
                <p> healthcare </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
           <div className="card" ref={cardss}>
                 <h1> Conn- <br /> ect Four.</h1>
                <p> fun game </p>
                <div className="image-links">
                    <Github />
                    <Url className="url"/>
                </div>  
           </div>
        </div>        
        </div>
    )
}

export default Project
