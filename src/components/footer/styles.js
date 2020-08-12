import styled from "styled-components"

export const FooterWrapper = styled.div`
    background: var(--bg);
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 200px;
   
    

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
    color: var(--textInverse);   
`
export const Linked = styled.div `
    line-height: 1;
    a {
        color: var(--textInverse);   
        font-size: 4rem;
        font-weight: lighter;
        
    }
    hr {
        background: #fff;
        width: 100%;
    }
`

export const OutroFooter = styled.div `
    width: 100%;
    height: 300px;
    justify-self: flex-end;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
`
export const FirstIntro = styled.div `
    height: auto;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    div:nth-child(3) {
    }
    h1 {
        color: var(--textInverse);   
    }
    p {
        color: var(--textInverse);   
        font-size: 1.5rem;
    }
`
export const LeftOutro = styled.div `
    margin-top: auto;

    p {
        color: var(--textInverse);   
    }

`

// color: #ffffff9e;
export const RightOutro = styled.div `
    margin-top: auto;
    display: flex;
    a {
        color: white;
        margin-left: 20px;
        color: var(--textInverse); 
        cursor: pointer;  
        text-decoration: underline;

        &:hover {
            color: var(--textInverse);   
        }
    }

`