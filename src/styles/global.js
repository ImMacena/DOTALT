import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Exo 2', sans-serif;
  }

  body::-webkit-scrollbar-track {
    background: ${({theme}) => theme.colors.background};
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.text};
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.background};
  }

  .App {
    margin-top: 75px;
  }
`;
