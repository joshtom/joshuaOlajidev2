// A total redesign of This project sections is needed
import React, { useEffect, useRef, useState } from "react";
import { Url } from '../url'
import { Github } from '../github'
import "./style.scss";

const Project = ({ data }) =>{
    const [isToggle, setIsToggle] = useState(true);
    const card = useRef(null);
    const cards = useRef(null);
    const cardss = useRef(null);

    const handleCard = () => {
        setIsToggle(!isToggle);
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
    }
    return(
        <div className="projects" id="project">
            
            <h1 className="project-title"> Projects. </h1>            
            <p className="project-subtitle"> I design and Build web Applications. </p>
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
            onClick={handleCard}
            className="toggle"
            > 
                { isToggle ? 'VIEW MORE' : 'VIEW LESS'} 
            </button> 
        </center>
        </div>
    )
}

export default Project

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "setup.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, maxHeight: 300) {
//             ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
//   }`