import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }
    #root {
        width: 100vw;
        height: 100vh;
        display: grid;
        place-content: center;
        background-color: #f6f8ff
    }
`;

export default GlobalStyles;
