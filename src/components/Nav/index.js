import React, { useRef, useState, useEffect, useLayoutEffect, useContext } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled, { css } from 'styled-components'
import gsap from 'gsap';

// Setting styles for component
    const Header = styled.div`
        height: auto;
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%; 
    `
    const Nav = styled.div`
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-template-areas: 
            "logo . . . . . . . . . . . themeToggler hamburger"; 
        justify-content: center;
        padding: 20px;
    `

    const Logo = styled.div`
        grid-area: logo;
        justify-self: end;
        background: ${props => props.logo || "black"};
        color: white;
        padding: 10px;
        align-self: center;
        cursor: pointer;
    `

    const ThemeToggler = styled.div`
        grid-area: themeToggler;
        justify-self: end;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        border-radius: 50%; 

        & > * {
            width: 25px;
            transition: 300ms all ease-in-out;

            &:hover {
                transform: rotate(180deg);
            }
        }
    `
    const Hamburger = styled.div`
            grid-area: hamburger;
            align-self: center;
            justify-self: start;
            transition: 300ms all ease-in-out;
            cursor: pointer;
            padding: 10px;
            div {
                width: 30px;
                height: 2px;
                background-color: black;
                margin: 5px 0;
                cursor: pointer;
                transition: all 0.125s ease-in-out;
                
                &:hover {
                    width: 30px;
                }
                &:nth-child(3) {
                    width: 20px;
                    height: 2px;
                    margin: 4px 0;

                    &:hover {
                        width: 30px;
                    }
                }
            }

            &:hover {
                div:nth-child(3) {
                    width: 30px;
                }
            }
    `

    

    const Stick = styled.div`
        background: ${props => props.background || "black"};
    `

    const NavToggle = styled.div `
        background: #307378;
        position: fixed;
        height: 100vh;
        right: 0;
        width: 35vw;
        transform: translateX(500px);
        z-index: -1;
        top: 0;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas: 
        " link . . . . social ";

        & > ul {
            grid-area: link;
            align-self: center;
            justify-self: start;
            margin-bottom: 0;
                & > li {
                    list-style-type: none;
                    margin-bottom: -5px;

                    @media screen and (max-width: 500px) {
                        margin-bottom: 35px;
                    }
                    & > a {
                        cursor: pointer;
                        color: black;
                        text-decoration: none;
                        font-size: 3.5rem;
                        position: relative;

                        &:after {
                            content: '';
                            display: block;
                            background: rgb(255, 255, 255);
                            height: 0px;
                            position: absolute;
                            left: -8px;
                            right: -12px;
                            bottom: -1px;
                            opacity: 0.1;
                            transition: all 0.25s ease;
                        }

                        &:hover::after {
                            height: 27px;
                            opacity: 0.15;
                        }
                    }
                }
        }


        @media screen and (max-width: 980px) {
            width: 780px;
        }

        @media screen and (max-width: 500px) {
            width: 100vw;
        }
    `

    const Con = styled.section`
        margin-bottom: 10px;
        & > h3 {
            color: #cdfcff69;
            font-weight: 100;
            font-size: 1rem;
        }
    `

    const Social = styled.div`
        display: flex;
        justify-content: space-between;

        & > a {
            text-decoration: none;
            color: #000;
            position: relative;

            &:after {
                content: '';
                display: inline-block;
                background: rgb(255, 255, 255);
                height: 0px;
                width: 70%;
                position: absolute;
                left: -8px;
                right: -12px;
                bottom: -1px;
                opacity: 0.1;
                transition: 0.25s all ease-in-out;
            }
        }
    `


    const Sun = styled.svg`
        fill: ${props => props.theme || "#010002"};
    `
    const Moon = styled.svg`
        fill: ${props => props.Moontheme || "#010002"};
    `

// End of styled component

export default function Navigation(props) {
    const themeContext = useContext(ThemeManagerContext)
    const [ isToggled, setToggled ] = useState(false)
    const tl = useRef();

    // Animating the sticks
    const stickTl = useRef();
    const stick1 = useRef();
    const stick2 = useRef();
    const stick3 = useRef();

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
        stickTl.current = gsap.timeline({paused: true});
        tl.current.to(navToggle.current, .4, 
            {
                x: 0,
                opacity: 1,
                ease: "back.out(1.7)"
            })
            .fromTo(socialLink.current,  .4,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
            .play(); //Animating the sidebar

          // Animating the sticks  
        //  stickTl.current.to(stick3.current, .1, { x: -10, opacity: 0 })
        //  .to(stick2.current, .1, { rotate: -45,})
        // .to(stick1.current, .1, { y: 6, rotate: 45,})
        stickTl.current.to(stick2.current, { duration: .1, ease: "elastic.out(1, 0.3)", x: -10 });
        //  stickTl.current.to(stick2.current, .1, { ease: "bounce.out", x: -10 })
         stickTl.current.to(stick3.current, .1, { ease: "elastic.out(1, 0.3)", y: 3 })
         stickTl.current.to(stick1.current, .1, { y: -3 })
    }, []);


    useEffect(() => {
        if(isToggled) {
            stickTl.current.play();
            tl.current.play();
            document.getElementsByTagName("html")[0].style.overflow = 'hidden'
        } else {
            stickTl.current.reverse();
            tl.current.reverse(); 
            setTimeout(() => {
                document.getElementsByTagName("html")[0].style.overflow = 'auto'
            }, 700)
        }
      }, [isToggled]);

    return (
        <Header ref={header}>
            <Nav>
                <Logo onClick={(e) => {e.preventDefault(); scrollTo('#banner')}} style={props.logo}> JO </Logo>
                <ThemeToggler>
                <label>
                    <input
                    type="checkbox"
                    onChange={() => themeContext.toggleDark()}
                    checked={themeContext.isDark}
                    />{" "}
                    {
                        themeContext.isDark ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.737 480.737">
                        <Moon style={props.MoonTheme}>
                        <path d="M349.362 1.039a8 8 0 00-10.896 10.88c40.328 72.547 40.328 160.777 0 233.324-64.431 115.906-210.622 157.635-326.528 93.204a8 8 0 00-10.904 10.896c45.292 81.055 130.853 131.304 223.704 131.376 92.8-.038 178.317-50.282 223.52-131.328 68.886-123.504 24.608-279.467-98.896-348.352zm15.584 418.136c-107.501 77.541-257.507 53.253-335.048-54.248a256.121 256.121 0 00197.434 0c130.522-54.52 192.134-204.526 137.614-335.048a239.987 239.987 0 0154.248 54.248c77.541 107.501 53.253 257.507-54.248 335.048z"/>
                        </Moon>
                        </svg>
                        :
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.741 212.741">
                <Sun style={props.theme}>
                    <path d="M106.392 56.537c-26.287 0-47.67 21.387-47.67 47.667 0 26.283 21.384 47.67 47.67 47.67 26.29 0 47.674-21.391 47.674-47.67 0-26.283-21.384-47.667-47.674-47.667zm0 88.863c-22.754 0-41.261-18.481-41.261-41.2 0-22.74 18.506-41.232 41.261-41.232 22.74 0 41.239 18.492 41.239 41.232 0 22.719-18.499 41.2-41.239 41.2zM34.178 104.204a3.21 3.21 0 00-3.203-3.221H3.189c-1.761 0-3.189 1.442-3.189 3.221 0 1.768 1.428 3.207 3.189 3.207h27.786a3.21 3.21 0 003.203-3.207zM53.608 49.866c1.192 1.192 3.353 1.167 4.538 0 1.238-1.249 1.245-3.296 0-4.542l-17.78-17.765c-.619-.619-1.414-.959-2.266-.959-.852 0-1.657.34-2.262.952-1.256 1.242-1.242 3.275 0 4.527l17.77 17.787zM57.594 157.571a3.19 3.19 0 00-2.28.956L37.535 176.3a3.242 3.242 0 000 4.57c1.557 1.528 2.985 1.542 4.57-.032l17.765-17.773a3.237 3.237 0 00-.014-4.549 3.162 3.162 0 00-2.262-.945zM209.545 100.979h-27.779a3.213 3.213 0 00-3.203 3.221 3.206 3.206 0 003.203 3.207h27.779a3.204 3.204 0 003.196-3.207c0-1.779-1.428-3.221-3.196-3.221zM159.155 49.848l17.758-17.773c1.242-1.249 1.249-3.282.007-4.506a3.181 3.181 0 00-2.28-.966c-.848 0-1.657.34-2.262.952l-17.79 17.78c-1.249 1.238-1.242 3.285.014 4.542 1.164 1.152 3.318 1.195 4.553-.029zM157.419 158.531a3.157 3.157 0 00-2.273-.963c-.848 0-1.65.34-2.265.956a3.189 3.189 0 000 4.542l17.765 17.805c1.016.998 2.623 1.893 4.585-.039 1.22-1.224 1.22-3.278-.036-4.534l-17.776-17.767zM104.431 178.955c-1.714.014-3.157 1.449-3.157 3.207v25.184c0 .848.333 1.643.923 2.226.619.63 1.414.963 2.294.981 1.768-.029 3.207-1.471 3.214-3.235l-.007-25.156c0-1.754-1.463-3.193-3.267-3.207zM104.488 33.768c1.768-.029 3.207-1.471 3.214-3.239l-.007-25.127c0-1.761-1.464-3.196-3.267-3.214-1.714.021-3.157 1.457-3.157 3.214v25.156c0 1.088.505 1.814.923 2.23a3.284 3.284 0 002.294.98z"/>
                </Sun>
                </svg>
                    }
                
                </label>
                </ThemeToggler> 

                <Hamburger onClick={() => setToggled(!isToggled)}>
                        <Stick ref={stick1} style={props.stick}></Stick>
                        <Stick ref={stick2} style={props.stick}></Stick>
                        <Stick ref={stick3} style={props.stick}></Stick>
                </Hamburger>
            </Nav>
                <NavToggle
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
                                <Con>
                                <h3> SAY HELLO </h3>
                                <p> joshuaolajide@gmail.com </p>
                                </Con>
                                <Social>
                                    <a href="#" className="gh">GH</a>
                                    <a href="#" className="tw">TW</a>
                                    <a href="#" className="ln">LN</a>
                                    <a href="#" className="md">MD</a>
                                </Social>



                            </li>
                        </ul>
    
                </NavToggle> 
        </Header>



    )
}