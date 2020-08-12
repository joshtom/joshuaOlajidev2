import styled from "styled-components"

export const FooterWrapper = styled.div`
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
    color: white;   
`
export const Linked = styled.div `
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
        color: white;
    }
    p {
        color: #dbdbdc;
        font-size: 1.5rem;
    }
`
export const LeftOutro = styled.div `
    margin-top: auto;

    p {
        color: #ffffff9e;
    }

`
export const RightOutro = styled.div `
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