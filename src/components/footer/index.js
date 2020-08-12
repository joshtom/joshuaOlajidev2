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
        <FooterWrapper id="contact">
           <IntroFooter>
                <Container>
                <ContainerHeader>Have an idea?</ContainerHeader>
                <Linked><Link>Tell me about it!</Link> <hr /></Linked>
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
                <p>&copy; {getYear} joshuaolajide</p>
            </LeftOutro>
            <RightOutro>
                <Link> Github. </Link>
                <Link> Twitter. </Link>
                <Link> Linkedin. </Link>
                <Link> Medium. </Link>
            </RightOutro>
           </OutroFooter>
        </FooterWrapper>
    )
}