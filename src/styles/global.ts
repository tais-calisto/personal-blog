import { createGlobalStyle } from 'styled-components';
import '@fontsource/mitr';
import '@fontsource/averia-gruesa-libre';
import '@fontsource/signika-negative';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2, p, a{
    color: ${({ theme }) => theme.colors.text};

  }

  h1{
    font-family: "Mitr", sans-serif;
  }

  h2{
    font-family: "Averia Gruesa Libre", cursive;
  }

  p, a{
    font-family: "Signika Negative", sans-serif;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    padding: 0.5rem;
    display: inline-block;
    position: relative;

    &:after{
      content:'';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.pink} ;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  section{
    margin: 0 6rem
  }

  img{
    object-fit: cover;
  }
  
`;
