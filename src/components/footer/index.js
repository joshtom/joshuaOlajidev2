import React from "react";
import { Link } from 'gatsby'
import { 
    FooterWrapper,
    IntroFooter,
    Container,
    ContainerHeader,
    Linked,
    OutroFooter,
    FirstIntro,
    LeftOutro,
    RightOutro
 } from './styles.js'

 const getYear = new Date().getFullYear();

export default function Footer() {
    return(
        // Complete this section with the contact route with https://cuberto.com/services/
        <FooterWrapper>
           <IntroFooter>
                <Container id="contact">
                <ContainerHeader>Have an idea?</ContainerHeader>
                <Linked><Link to="/">Tell me about it!</Link></Linked>
                </Container>
           </IntroFooter>

           <OutroFooter>
            <FirstIntro>
                <div>
                <h1>Email:</h1>
                <p> joshuaolarjide@gmail.com </p>
                </div>
                <hr />
                <div>
                <h1>Phone:</h1>
                <p> +2348136023230 </p>
                </div>
            </FirstIntro>
            <LeftOutro>
                <a href="https://github.com/joshtom/" target="_blank"> Github. </a>
                <a href="https://twitter.com/olatojosh" target="_blank"> Twitter. </a>
                <a href="https://www.linkedin.com/in/joshua-olajide-582457177/" target="_blank"> Linkedin. </a>
                <a href="https://medium.com/@olajidejoshua4real" target="_blank"> Medium. </a>
            </LeftOutro>
            <RightOutro>
            <p>&copy; {getYear} joshuaolajide</p>
            </RightOutro>
           </OutroFooter>
        </FooterWrapper>
    )
}