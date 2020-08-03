import React from "react";
import styled from "styled-components"

const FooterWrapper = styled.div`
    background: #222228;
    min-height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #6f6f7b;
    }
`
export default function Footer() {
    return(
        <FooterWrapper>
            <p>
            © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
        </FooterWrapper>
    )
}