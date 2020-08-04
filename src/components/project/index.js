// A total redesign of This project sections is needed
import React, { useEffect, useRef, useState } from "react";
import { ImageSetup } from '../image'
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
            
            <h1> Projects. </h1>            
            <p> Some selected projects I have worked on. </p>
        <div className="container">
           <div className="card">
                <header>
                    <ImageSetup />
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
           <header>
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <ImageSetup />
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">hackernews clone</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>blog.
                    
                    </p>
                </footer>
           </div>
           <div className="card">
           <header>
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <ImageSetup />
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">Feeling pressed</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>blog.
                    
                    </p>
                </footer>
           </div>
           <div className="card" ref={card}>
           <header>
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <ImageSetup />
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">health Journal</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>Healthcare.
                    
                    </p>
                </footer>
           </div>
           <div className="card" ref={cards}>
           <header>
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <ImageSetup />
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">DevAlert</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>Job center.
                    
                    </p>
                </footer>
           </div>
           <div className="card" ref={cardss}>
           <header>
                    {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                    <ImageSetup />
                </header> 
                <footer>
                    <h4><a href="/joshuaolajide.netlify.app">Connect Four</a></h4> <span className="check">|</span> 
                    <a href="/" className="links check">gh.</a>
                    <a href="/" className="links check">live.</a> 
                    <p>Game.
                    
                    </p>
                </footer>
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