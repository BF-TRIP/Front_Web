import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: bold;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  /* Tenada 폰트 설정 */
  @font-face {
    font-family: 'Tenada';
    src: url('/src/assets/fonts/Tenada.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: 'Pretendard', 'Tenada'; 
    width: 100vw;
    height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #e0e0e0;
  }

  #root {
    width: min(390px, 100%);
    height: min(844px, 100%);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, picture, video, canvas {
    display: block;
    max-width: 100%;
  }

  ul, ol {
    list-style: none;
  }

  button, input, textarea, select {
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    outline: none;
  }
`;

export default GlobalStyle;
