import styled from "styled-components"

import { Container } from "../container"

// Setting styles for component
export const HeaderWrapper = styled.header`
height: auto;
position: fixed;
top: 0;
z-index: 1;
width: 100%; 
`
export const Nav = styled.div`
display: grid;
grid-template-columns: repeat(14, 1fr);
grid-template-areas: 
    "logo . . . . . . . . . . . themeToggler hamburger"; 
justify-content: center;
padding: 20px;
`

export const Logo = styled.div`
grid-area: logo;
justify-self: end;
background: ${props => props.logo || "black"};
color: white;
padding: 10px;
align-self: center;
cursor: pointer;
`

export const ThemeToggler = styled.div`
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
export const Hamburger = styled.div`
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



export const Stick = styled.div`
background: ${props => props.background || "black"};
`

export const NavToggle = styled.div `
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

export const Con = styled.section`
margin-bottom: 10px;
& > h3 {
    color: #cdfcff69;
    font-weight: 100;
    font-size: 1rem;
}
`

export const Social = styled.div`
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


export const Sun = styled.svg`
fill: ${props => props.theme || "#010002"};
`
export const Moon = styled.svg`
fill: ${props => props.Moontheme || "#010002"};
`

// End of styled component
