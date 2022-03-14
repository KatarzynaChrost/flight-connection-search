import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat',sans-serif;
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    a,button{
        font-family: 'Montserrat',sans-serif;
    }
`;
