import React from "react";
import styled from "styled-components"

const FooterWrapper = styled.div`
    background: transparent;
    min-height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: var(--textTitle);
        margin: auto;
    }
`
export default function Footer() {
    return(
        <FooterWrapper>
            <p>
            © {new Date().getFullYear()}, Built with love by Joshua Olajide || github 
            </p>
        </FooterWrapper>
    )
}