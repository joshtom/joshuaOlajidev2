import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg);
  box-shadow: inset 20px 20px 70px rgba(0,0,0,.1), 
            inset -20px -20px 70px rgba(0,0,0,.1);
  color: var(--textNormal);
  height: 100% !important;
  &.dark {
    --bg: #131217;
    --textNormal: #fff;
    --textInverse: #fff;
    --textTitle: #dbdbdc;
    --textTitleInverse: #000;
    --textCreamy: #f8f8f9;
    --shadyText: #ffffff9e;
    --textHeaderColor: #FB8B24;
    --textHeaderBg: brown;
    --link: #542c85;
  }
  &.light {
    --bg: #F8F8F8;
    --textNormal: rgba(0, 0, 0, 0.7);
    --textInverse: #000;
    --textTitle: #303030;
    --textTitleInverse: #dbdbdc;
    --textCreamy: #131217;
    --shadyText: #4c4c55;
    --textHeaderColor: brown;
    --textHeaderBg: #fff:
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
