import styled, { createGlobalStyle } from "styled-components";

import bgImage from "./images/background-image.jpg";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: auto;
    padding: 10px;
    font-family: 'Open Sans';
    font-size: 16px;
    width: 80vw;
    min-height: 100vh;
    text-align: center;
    background: url(${bgImage}) no-repeat;
    background-size: cover;
    background-position: center; 
    filter: opacity(1);
}


h1 {
    text-transform: uppercase;
    color: #FfFF;
}

`;

export const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .score-area {
    width: 30vw;
    background-color: #08aeea;
    background-image: linear-gradient(270deg, #08aeea 0%, #2af598 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1rem;
  }
  button:not(.answer-list) {
    cursor: pointer;
    width: 300px;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    padding: 0.75rem;
    margin: 5px;
    font-size: 1rem;
    background-image: linear-gradient(270deg, #08aeea 0%, #2af598 100%);
  }
  button:hover {
    transform: scale(1.025);
  }
`;
