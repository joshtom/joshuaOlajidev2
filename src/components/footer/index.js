import React from "react";
import styled from "styled-components"
import { Link } from 'gatsby'

const FooterWrapper = styled.div`
    background: black;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 200px;
    

    p {
        color: var(--textTitle);
        margin: auto;
    }
`

const IntroFooter = styled.div `
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Container = styled.div `
    margin-top: auto;
    align-self: self-end;
`
const ContainerHeader = styled.h1 `
    font-size: 4rem;
    color: white;   
`
const Linked = styled.div `
    line-height: 1;
    a {
        color: white;
        font-size: 4rem;
        font-weight: lighter;
        cursor: none;
    }
    hr {
        background: #fff;
    }
`

const OutroFooter = styled.div `
    width: 100%;
    height: 300px;
    justify-self: flex-end;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
`
const FirstIntro = styled.div `
    height: auto;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    div:nth-child(3) {
    }
    h1 {
        color: white;
    }
    p {
        color: #dbdbdc;
        font-size: 1.5rem;
    }
`
const LeftOutro = styled.div `
    margin-top: auto;

    p {
        color: #ffffff9e;
    }

`
const RightOutro = styled.div `
    margin-top: auto;
    display: flex;
    a {
        color: white;
        margin-left: 20px;
        cursor: pointer;
        color: #ffffff9e;
        &:hover {
            color: white;
        }
    }

`



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
                <p>&copy; 2020 joshuaolajide</p>
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