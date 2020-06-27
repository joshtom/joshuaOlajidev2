import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Image from '../../images/setup.jpg'

export default function Project() {
    const [isToggle, setIsToggle] = useState(false);
    const card = useRef(null);
    const cards = useRef(null);
    const cardss = useRef(null);
    useEffect(() => {
        if (isToggle) {
        card.current.style.display = 'block'
        cards.current.style.display = 'block'
        cardss.current.style.display = 'block'
            }
        
        else {
            card.current.style.display = 'none'
        cards.current.style.display = 'none'
        cardss.current.style.display = 'none'
        }
        
    }, [isToggle])
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
           <div className="card" ref={card}>

           </div>
           <div className="card" ref={cards}>

           </div>
           <div className="card" ref={cardss}>

           </div>
        </div>
        <center>

            <button
            onClick={() => setIsToggle(!isToggle)}> 
                { isToggle ? 'VIEW LESS' : 'VIEW MORE?'} 
            </button> 
        </center>
        </div>
    )
}