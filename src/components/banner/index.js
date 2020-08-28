import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "./styles.module.css"

export default function Banner() {
  const greet = useRef(null)
  const name = useRef(null)
  const title = useRef(null)
  const left = useRef(null)
  const right = useRef(null)
  const experience = useRef(null)
  const path1 = useRef(null);
  const path2 = useRef(null);
  const path3 = useRef(null);
  const path4 = useRef(null);
  const path5 = useRef(null);
  const path6 = useRef(null);
  const path7 = useRef(null);
  const path8= useRef(null);
  const path9 = useRef(null);
  const path10 = useRef(null);
  const path11 = useRef(null);
  const path12 = useRef(null);
  const path13 = useRef(null);
  const path14 = useRef(null);
  const path15 = useRef(null);
  const path16 = useRef(null);
  const path17 = useRef(null);
  const path18 = useRef(null);
  const path19 = useRef(null);
  const path20 = useRef(null);
  const path21 = useRef(null);
  const path22 = useRef(null);
  const path23 = useRef(null);
  const path24 = useRef(null);
  const path25 = useRef(null);
  const path26 = useRef(null);
  const path27 = useRef(null);
  const path28 = useRef(null);
  const path29 = useRef(null);
  const path30 = useRef(null);
  const path31 = useRef(null);
  const path32 = useRef(null);
  const path33 = useRef(null);
  const path34 = useRef(null);
  const path35 = useRef(null);
  const path36 = useRef(null);
  const path37 = useRef(null);
  const path38 = useRef(null);
  const path39 = useRef(null);
  const path40 = useRef(null);
  const path41 = useRef(null);
  const path42 = useRef(null);
  const path43 = useRef(null);
  const path44 = useRef(null);
  const path45 = useRef(null);
  const path46 = useRef(null);
  const path47 = useRef(null);
  const path48 = useRef(null);
  const path49 = useRef(null);
  const path50 = useRef(null);


  // for (let i = 0; i < paths.length; i++) {    }

  useEffect(() => {
    const tl = gsap.timeline({ paused: true })
    const pathTl = gsap.timeline({
      delay: 0.04,
      yoyo: true,
    })
    tl.fromTo(
      greet.current,
      0.1,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, ease: "bounce.in" }
    )
      // tl.fromTo(greet.current, {duration: 2,  ease: "bounce.in", scale:0, rotation:0 }, {duration: 2,  ease: "bounce.out", scale:1.5, rotation:30 } );
      .fromTo(name.current, 0.1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(title.current, 0.1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        left.current,
        0.4,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)" }
      )
      .fromTo(
        right.current,
        0.4,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)" }
      )
      .play()

    // ==================================== //
    pathTl
      .fromTo(path1.current, { rotationZ:45, opacity: 0 }, { rotationZ: 0, opacity: 1})
      .fromTo(path2.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path3.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path4.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path5.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path6.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path7.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path8.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path9.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path10.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path11.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path12.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path13.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path14.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path15.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path16.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path17.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path18.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path19.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path20.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path21.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path22.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path23.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path24.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path25.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path26.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path27.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path28.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path29.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path30.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path31.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path32.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path33.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path34.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path35.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path36.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path37.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path38.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path39.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path40.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path41.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path42.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path43.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path44.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path45.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path46.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path47.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path48.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path49.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
      .fromTo(path50.current, { rotationZ:45, opacity: 0 }, { rotationZ:0, opacity: 1 })
  }, [])



  return (
    <div className={styles.banner} id="banner">
      <div className={styles.scroll}>
          <div className={styles.scroller}> </div>
      </div>

      <div className={styles.bannerText}>
        <div>
          <p ref={greet}>Hello<span role="img" aria-label="wave">👋🏼</span>, I'm</p>

          <h1 className={styles.avatarName} ref={name}>
            Joshua Olajide <span role="img" aria-label="verified">✔</span>
          </h1>

          <h1 className={styles.jobTitle} ref={title}>
            Frontend Developer.
          </h1>

          <section className={styles.bannerTextSection}>
            <p ref={left} className={styles.bannerTextSection__intro}>
              I <span className={styles.bannerTextSection__heart} role="img" aria-label="love">❤</span> to
              create Scalable, Fast and mobile-first web Applications.
            </p>
            <p ref={right}>
              Put on a <span role="img" aria-label="smile">😊</span> and Get ready to turn your Imaginations into reality.
            </p>
          </section>
        </div>

        <section className={styles.bannerScroll}>
          <section className={styles.bannerScroller}>
            <section> </section>
          </section>
        </section>
      </div>
      <div className={styles.experience} ref={experience}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 638.92 792">
  <path ref={path1} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M255.56 51.21v33.12l28.69 16.56 28.68-16.56V51.21l-28.68-16.56-28.69 16.56z"/>
  <path ref={path2} fill="#427280" stroke="#427280" strokeMiterlimit="10" strokeWidth="3" d="M326.18 51.21v33.12l28.68 16.56 28.69-16.56V51.21l-28.69-16.56-28.68 16.56z"/>
  <path ref={path3} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M396.79 51.21v33.12l28.69 16.56 28.68-16.56V51.21l-28.68-16.56-28.69 16.56z"/>
  <path ref={path4} fill="#fb8b24" stroke="#f7931e" strokeMiterlimit="10" strokeWidth="3" d="M467.41 51.21v33.12l28.68 16.56 28.68-16.56V51.21l-28.68-16.56-28.68 16.56z"/>
  <path ref={path5} fill="#407280" stroke="#407280" strokeMiterlimit="10" strokeWidth="3" d="M538.02 51.21v33.12l28.69 16.56 28.68-16.56V51.21l-28.68-16.56-28.69 16.56z"/>
  <path ref={path6} fill="#417280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M220.26 111.39v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path7} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M290.87 111.39v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path8} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M361.49 111.39v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path9} fill="#fb8b24" stroke="#f7931e" strokeMiterlimit="10" strokeWidth="3" d="M184.95 173.22v33.13l28.68 16.56 28.69-16.56v-33.13l-28.69-16.56-28.68 16.56z"/>
  <path ref={path10} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M255.56 173.22v33.13l28.69 16.56 28.68-16.56v-33.13l-28.68-16.56-28.69 16.56z"/>
  <path ref={path11} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M326.18 173.22v33.13l28.68 16.56 28.69-16.56v-33.13l-28.69-16.56-28.68 16.56zM396.79 173.23v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.57-28.69 16.57z"/>
  <path ref={path12} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M538.02 173.23v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path13} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M149.64 233.41v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path14} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M220.26 233.41v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path15} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M290.87 233.41v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path16} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M361.49 233.41v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path17} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M432.1 233.41v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56zM502.71 233.41v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM114.34 295.24v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path18} fill="#fb8b24" stroke="#f7931e" strokeMiterlimit="10" strokeWidth="3" d="M326.18 295.24v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path19} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M396.79 295.24v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path20}fill="#fb8b24" stroke="#f7931e" strokeMiterlimit="10" strokeWidth="3" d="M467.41 295.24v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path21} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M538.02 295.24v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM79.03 355.42v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path22} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M149.64 355.42v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path23} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M290.87 355.42v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM361.49 355.42v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56zM432.1 355.42v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56zM502.71 355.42v33.12l28.69 16.57 28.68-16.57v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path24} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M43.72 417.26v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.57-28.69 16.57zM114.34 417.26v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path25} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M184.95 417.26v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path26} fill="#803341" d="M255.56 417.26v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM326.18 417.26v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path27} fill="#fb8b24" stroke="#f7931e" strokeMiterlimit="10" strokeWidth="3" d="M538.02 417.26v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path28} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M79.03 477.44v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path29} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M149.64 477.44v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM220.26 477.44v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path30} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M290.87 477.44v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path31} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M361.49 477.44v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path32} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M502.71 477.44v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path33} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M43.72 539.27v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path34} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M114.34 539.27v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path35} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M184.95 539.27v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path36} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M255.56 539.27v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path37}fill="#803341" d="M326.18 539.27v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path38} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M396.79 539.27v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path39} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M467.41 539.27v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path40} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M220.26 599.45v33.13l28.68 16.55 28.68-16.55v-33.13l-28.68-16.56-28.68 16.56z"/>
  <path ref={path41} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M290.87 599.45v33.13l28.69 16.55 28.68-16.55v-33.13l-28.68-16.56-28.69 16.56zM361.49 599.45v33.13l28.68 16.55 28.68-16.55v-33.13l-28.68-16.56-28.68 16.56z"/>
  <path ref={path42} fill="#80275d" stroke="#80275d" strokeMiterlimit="10" strokeWidth="3" d="M432.1 599.46v33.12l28.68 16.55 28.69-16.55v-33.12l-28.69-16.57-28.68 16.57z"/>
  <path ref={path43} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M43.72 661.29v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path44} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M184.95 661.29v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56zM255.56 661.29v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56zM326.18 661.29v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path45} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M396.79 661.29v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path46} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M79.03 721.47v33.12l28.68 16.56 28.69-16.56v-33.12l-28.69-16.56-28.68 16.56z"/>
  <path ref={path47} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M149.64 721.47v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path48} fill="#407280" stroke="#417280" strokeMiterlimit="10" strokeWidth="3" d="M220.26 721.47v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
  <path ref={path49} fill="#582e80" stroke="#582e80" strokeMiterlimit="10" strokeWidth="3" d="M290.87 721.47v33.12l28.69 16.56 28.68-16.56v-33.12l-28.68-16.56-28.69 16.56z"/>
  <path ref={path50} fill="#803341" d="M361.49 721.47v33.12l28.68 16.56 28.68-16.56v-33.12l-28.68-16.56-28.68 16.56z"/>
</svg>
      </div>
    </div>
  )
}
