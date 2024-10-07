import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme["background"]};
        
        h1, h2, h3, h4, p, span{
            line-height: 130%;
        }

    }

`;
