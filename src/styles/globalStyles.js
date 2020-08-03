import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg);
  color: var(--textNormal);
  &.dark {
    --bg: #131217;
    --textNormal: #fff;
    --textInverse: #fff;
    --textTitle: #dbdbdc;
    --textTitleInverse: #000;
    --link: #542c85;
  }
  &.light {
    --bg: #F8F8F8;
    --textNormal: rgba(0, 0, 0, 0.7);
    --textInverse: #000;
    --textTitle: #303030;
    --textTitleInverse: #dbdbdc;
    --link: #542c85;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--textTitle);
    margin-top: 0px;
  }
  input,
  textarea,
  button,
  select,
  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  }
  a {
  color: var(--link);
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  }
  img {
    padding: 0;
    margin: 0;
    user-select: none;
  }
}`
