import React, { useRef, useState, useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import gsap from 'gsap';

import {
  HeaderWrapper,
  Nav,
  Logo,
  ThemeToggler,
  Hamburger,
  Stick,
  NavToggle,
  Con,
  Social,
 } from "./styles"


 export default function Header({ logo }) {
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




  useEffect(() => {
      tl.current = gsap.timeline({paused: true});
      stickTl.current = gsap.timeline({paused: true});
      tl.current.to(navToggle.current, .4, { x: 0, opacity: 1, ease: "back.out(1.7)"})
          .fromTo(navToggleLinks.current,  .4,{ y: 10, opacity: 0 }, { y: 0, opacity: 1, stagger: true })
          .fromTo(socialLink.current,  .4,{ y: 10, opacity: 0 }, { y: 0, opacity: 1 })
          .play(); //Animating the sidebar

        // Animate stick
       stickTl.current.to(stick3.current, .1, { xPercent:  -10, opacity: 0 })
       .to(stick2.current, .1, { rotate: -45, width: '50px'})
      .to(stick1.current, .1, { y: 6, rotate: 45, width: '50px'})


    //    Animating the header on page start
    const headerAnimate = gsap.timeline({ paused: true });
    headerAnimate.fromTo(header.current, .4, { y: -10, opacity: 0 }, { y: 0, opacity: 1 });
    headerAnimate.play();
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

          let websiteTheme
      if (typeof window !== "undefined") {
        websiteTheme = window.__theme
      }

      const [theme, setTheme] = useState(websiteTheme)

      useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => {
          setTheme(window.__theme)
        }
      }, [])

      const themeToggle = () => {
        window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
      }

  return (
      <HeaderWrapper ref={header}>
          <Nav>
              <Logo 
              onClick={(e) => {e.preventDefault(); scrollTo('#banner')}} 
              style={logo}> <span style={{color: 'var(--textInverse)'}}
              role="logo"
              >Joshua. </span> </Logo>
              <ThemeToggler>
                  <div onClick={themeToggle}>
                    {theme === "dark" ? "☀" : "☾"}
                  </div>
              </ThemeToggler> 

              <Hamburger onClick={() => setToggled(!isToggled)}>
                      <Stick ref={stick1}></Stick>
                      <Stick ref={stick2}></Stick>
                      <Stick ref={stick3}></Stick>
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
                              <a href="https://medium.com/@olajidejoshua4real" id="pen" target="_blank" rel="noreferrer">Writings</a>
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
      </HeaderWrapper>



  )
}





// const Header = ({ siteTitle }) => {
//   let websiteTheme
//   if (typeof window !== "undefined") {
//     websiteTheme = window.__theme
//   }

//   const [theme, setTheme] = useState(websiteTheme)

//   useEffect(() => {
//     setTheme(window.__theme)
//     window.__onThemeChange = () => {
//       setTheme(window.__theme)
//     }
//   }, [])

//   const themeToggle = () => {
//     window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark")
//   }

//   return (
//     <HeaderWrapper>
//       <Container>
//         <Wrapper>
//           <h1 style={{ margin: 0 }}>
//             <Link
//               to="/"
//               style={{
//                 color: "var(--textTitleInverse)",
//                 textDecoration: `none`,
//               }}
//             >
//               {/* {siteTitle} */}
//             </Link>
//           </h1>
//           <button onClick={themeToggle}>
//             {theme === "dark" ? "☀" : "☾"}
//           </button>
//         </Wrapper>
//       </Container>
//     </HeaderWrapper>
//   )
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
