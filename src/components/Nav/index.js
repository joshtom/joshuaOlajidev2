import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./styles.css";
import gsap from 'gsap';
import Sunlight from "../../assets/sunlight.svg";
// import Close from "../../assets/close.svg";


export default function Navigation() {
    const [ isToggled, setToggled ] = useState(false)
    const tl = useRef();
    // const animateHamburger = TweenLite;
    const navToggle = useRef(null);
    const navToggleLinks = useRef(null);
    const header = useRef(null);
    const Link = useRef(null);
    const socialLink = useRef(null);

    function useLockBodyScroll() {
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


    // React.useEffect(() => {
    //     // add when mounted
    //     document.body.addEventListener("click", () => {
    //         tl.current.reverse()
    //         setToggled(false)
    //     });
    //     // return function to be called when unmounted
    //     return () => {
    //       document.body.removeEventListener("click", () => {
    //           tl.current.reverse()
    //             setToggled(false)
    //       });
    //     };
    //   }, []);

    return (
        <header className="header" ref={header}>
            <nav className="nav">
                <div className="logo">
                JO
                </div>
                <div className="themeToggler">
                    <Sunlight />
                </div>
                <div 
                className={`hamburger ${isToggled ? 'animate__hamburger' : ''}`}
                onClick={() => setToggled(!isToggled)}
                role="button"
                >
                    <div></div>
                    <div></div>
                    <div></div>
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
                                <a href="#" id="about">About</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#" id="pen">Writings</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#" id="project">Project</a>
                            </li>
        
                            <li ref={Link}
                            onClick={() => setToggled(!isToggled)}
                            >
                                <a href="#" id="contact">Contact</a>
                            </li>
        
                            <li ref={socialLink}
                            onClick={() => setToggled(!isToggled)}
                            >
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