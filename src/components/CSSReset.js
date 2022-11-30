import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    font-family: sans-serif;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }

  .color1 { color: #f23e02 };
  .background1 { background-color: #f23e02 };
  .color2 { color: #fef5c8 };
  .background2 { background-color: #fef5c8 };
  .color3 { color: #00988d };
  .background3 { background-color: #00988d };
  .color4 { color: #2c6b74 };
  .background4 { background-color: #2c6b74 };
  .color5 { color: #013750 };
  .background5 { background-color: #013750 };

  .boltBorder {
        height: .5rem;
    }
    
    .lightBorder {
        height: .2rem;
    }
`;
