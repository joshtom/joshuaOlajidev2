import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import React, { useContext } from "react"
import styled, { withTheme } from "styled-components"
import { GlobalStyle } from "../theme"

const MainHeading = styled.h2`
  color: rgb(${props => props.theme.palette.lightShades});
`

export const Layout = withTheme((props) => {
  const { children, theme } = props
  
  const themeContext = useContext(ThemeManagerContext)

  return (
    <div>
      {/* <GlobalStyle theme={theme} /> */}
      <header>
        <MainHeading>
          <a href={'#'}>Gatsby Dark Theme</a>
        </MainHeading>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => themeContext.toggleDark()}
              checked={themeContext.isDark}
            />{" "}
            Dark mode
          </label>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
})