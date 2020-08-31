import styled from "styled-components"

export const FooterWrapper = styled.div`
    background: transparent;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 200px;
   

    @media screen and (max-width: 982px) {
        padding: 50px;
    }
    

    p {
        color: var(--textInverse);
        margin: auto;
    }
`

export const IntroFooter = styled.div `
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    

`
export const Container = styled.div `
    margin-top: auto;
    align-self: self-end;
`
export const ContainerHeader = styled.h1 `
    font-size: 4rem;
    color: var(--textHeaderColor);  

    @media screen and (max-width: 982px) {
        font-size: 2.5rem;
    }
`
export const Linked = styled.div `
    line-height: 1;
    a {
        color: var(--textInverse);   
        font-size: 4rem;
        font-weight: lighter;

        @media screen and (max-width: 982px) {
            font-size: 2rem;
        }
        
    }
    hr {
        background: #fff;
        width: 100%;
    }

`

export const OutroFooter = styled.div `
    min-width: 100%;
    height: 300px;
    justify-self: flex-end;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    
    @media screen and (max-width: 982px) {
        flex-direction: row-reverse;
    }
    
    
`
export const FirstIntro = styled.div `
    height: auto;
    width: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    div:nth-child(1) {
        @media screen and (max-width: 982px) {
            margin-top: 10px;
        }
    }

    div:nth-child(3) {
        @media screen and (max-width: 982px) {
            flex-basis: 100%;
        }
    }
    h1 {
        color: var(--textHeaderColor);
        @media screen and (max-width: 982px) {
            font-size: 1.5rem;
        }  
    }
    p {
        color: var(--textInverse);   
        font-size: 1.5rem;

        @media screen and (max-width: 982px) {
            font-size: 1.2rem;
        }
        
    }
    
`
export const RightOutro = styled.div `
    margin-top: auto;

    p {
        color: var(--textInverse);   
    }
    @media screen and (max-width: 982px) {
        flex-basis: 100%;
    }

`

// color: #ffffff9e;
export const LeftOutro = styled.div `
    margin-top: auto;
    display: flex;
    flex-flow: row wrap;
    a {
        color: white;
        margin-left: 20px;
        color: var(--textInverse); 
        cursor: pointer;  
        text-decoration: underline;

        &:hover {
            color: var(--textInverse);   
        }

            @media screen and (max-width: 982px) {
                width: 40%;
                line-height: 2rem;
                margin: 0;
            }
    }

    @media screen and (max-width: 982px) {
        flex-basis: 100%;
    }

`