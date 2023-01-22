import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-text:              #656565;
    --color-resultTexts1:      #3d75bb; 
    --color-resultTexts2:      #67a3ed;
    --color-background1:       #f5f7fa;
    --color-background2:       #f7f9fa;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media (max-width: 699px) {
    :root {
      font-size: 42.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;      
    font-size: 0.5em;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 0.5rem;
      
    }
    &::-webkit-scrollbar-track {
      background: rgba(153, 168, 165, 0.3);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var( --color-fontescura);
      border-radius: 0.3rem;
    }
  }

/*   .Toastify__toast-body{
    font-size: 3em;
    font-weight: 500;
  }
 */
  input{
    padding: 10px;
  }

  h1, h2, h3, h4, p, span, div{
    font-family: 'Poppins';
    font-style: normal;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', normal;
  }

  input:focus {
    border: 1px solid var(--color-success);
  }
`;

export default GlobalStyle;
