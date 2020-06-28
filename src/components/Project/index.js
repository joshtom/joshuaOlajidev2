import React, { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Image from "../../images/setup.jpg"
import "./style.scss";

const Project = ({ data }) =>{
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
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <img src={Image}/>
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

export default Project

export const query = graphql`
  query {
    file(relativePath: { eq: "setup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }`