import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import "./styles.css";
import gsap from 'gsap';


export default function Navigation(props) {
    const [ isToggled, setToggled ] = useState(false)
    const tl = useRef();
    const navToggle = useRef(null);
    const navToggleLinks = useRef(null);
    const header = useRef(null);
    const Link = useRef(null);
    const socialLink = useRef(null);

    function useLockBodyScroll(props) {
        useLayoutEffect(() => {
         // Get original value of body overflow
         const originalStyle = window.getComputedStyle(document.body).overflow;  
         // Prevent scrolling on mount
         document.body.style.overflow = 'hidden';
         // Re-enable scrolling when component unmounts
         return () => document.body.style.overflow = originalStyle;
        }, []); // Empty array ensures effect is only run on mount and unmount
      }

    useEffect(() => {
        tl.current = gsap.timeline({paused: true});
        tl.current.to(navToggle.current, .4, 
            {
                x: 0,
                opacity: 1,
                ease: "back.out(1.7)"
            })
            .fromTo(socialLink.current,  .4,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
            .play();
    }, []);


    useEffect(() => {
        if(isToggled) {
            tl.current.play();
            document.getElementsByTagName("html")[0].style.overflow = 'hidden'
        } else {
            tl.current.reverse(); 
            setTimeout(() => {
                document.getElementsByTagName("html")[0].style.overflow = 'auto'
            }, 700)
        }
      }, [isToggled]);

    return (
        <header className="header" ref={header}>
            <nav className="nav">
                <div className="logo" style={props.logo} onClick={(e) => {e.preventDefault(); scrollTo('#banner')}}>
                JO
                </div>
                <div className="themeToggler" >
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.741 212.741">
                <g fill="#010002" style={props.theme}>
                    <path d="M106.392 56.537c-26.287 0-47.67 21.387-47.67 47.667 0 26.283 21.384 47.67 47.67 47.67 26.29 0 47.674-21.391 47.674-47.67 0-26.283-21.384-47.667-47.674-47.667zm0 88.863c-22.754 0-41.261-18.481-41.261-41.2 0-22.74 18.506-41.232 41.261-41.232 22.74 0 41.239 18.492 41.239 41.232 0 22.719-18.499 41.2-41.239 41.2zM34.178 104.204a3.21 3.21 0 00-3.203-3.221H3.189c-1.761 0-3.189 1.442-3.189 3.221 0 1.768 1.428 3.207 3.189 3.207h27.786a3.21 3.21 0 003.203-3.207zM53.608 49.866c1.192 1.192 3.353 1.167 4.538 0 1.238-1.249 1.245-3.296 0-4.542l-17.78-17.765c-.619-.619-1.414-.959-2.266-.959-.852 0-1.657.34-2.262.952-1.256 1.242-1.242 3.275 0 4.527l17.77 17.787zM57.594 157.571a3.19 3.19 0 00-2.28.956L37.535 176.3a3.242 3.242 0 000 4.57c1.557 1.528 2.985 1.542 4.57-.032l17.765-17.773a3.237 3.237 0 00-.014-4.549 3.162 3.162 0 00-2.262-.945zM209.545 100.979h-27.779a3.213 3.213 0 00-3.203 3.221 3.206 3.206 0 003.203 3.207h27.779a3.204 3.204 0 003.196-3.207c0-1.779-1.428-3.221-3.196-3.221zM159.155 49.848l17.758-17.773c1.242-1.249 1.249-3.282.007-4.506a3.181 3.181 0 00-2.28-.966c-.848 0-1.657.34-2.262.952l-17.79 17.78c-1.249 1.238-1.242 3.285.014 4.542 1.164 1.152 3.318 1.195 4.553-.029zM157.419 158.531a3.157 3.157 0 00-2.273-.963c-.848 0-1.65.34-2.265.956a3.189 3.189 0 000 4.542l17.765 17.805c1.016.998 2.623 1.893 4.585-.039 1.22-1.224 1.22-3.278-.036-4.534l-17.776-17.767zM104.431 178.955c-1.714.014-3.157 1.449-3.157 3.207v25.184c0 .848.333 1.643.923 2.226.619.63 1.414.963 2.294.981 1.768-.029 3.207-1.471 3.214-3.235l-.007-25.156c0-1.754-1.463-3.193-3.267-3.207zM104.488 33.768c1.768-.029 3.207-1.471 3.214-3.239l-.007-25.127c0-1.761-1.464-3.196-3.267-3.214-1.714.021-3.157 1.457-3.157 3.214v25.156c0 1.088.505 1.814.923 2.23a3.284 3.284 0 002.294.98z"/>
                </g>
                </svg>
                </div>
                <div 
                className={`hamburger ${isToggled ? 'animate__hamburger' : ''}`}
                onClick={() => setToggled(!isToggled)}
                role="button"
                >
                    <div style={props.stick}></div>
                    <div style={props.stick}></div>
                    <div style={props.stick}></div>
                </div>
            </nav>
                <div 
                className="navToggle" 
                ref={navToggle}
                >
                            <ul className="link" ref={navToggleLinks}>
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#about" onClick={(e) => {e.preventDefault(); scrollTo('#about')}}>About</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#" id="pen">Writings</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#project" onClick={(e) => {e.preventDefault(); scrollTo('#project')}}>Project</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#contact" onClick={(e) => {e.preventDefault(); scrollTo('#contact')}}>Contact</a>
                            </li>
        
                            <li ref={socialLink}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <section className="con">
                                <h3> SAY HELLO </h3>
                                <p> joshuaolajide@gmail.com </p>
                                </section>
                                <div className="social">
                                    <a href="#" className="gh">GH</a>
                                    <a href="#" className="tw">TW</a>
                                    <a href="#" className="ln">LN</a>
                                    <a href="#" className="md">MD</a>
                                </div>



                            </li>
                        </ul>
    
                </div> 
        </header>



    )
}