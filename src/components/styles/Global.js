import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        /* background-color: #ff00004f; */
    }
    body{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        place-items: center;
        background-color: #f6f8ff;
    }
    #root {
        width: 100%;
        display: grid;
        place-content: center;
        object-fit: cover;
        
    }
    @media (max-width: 450px) {
        body{
            place-items: start;
            margin-bottom: 4em;
            overflow: hidden;
        }
        #root{
            place-content: start;
        }
    }
`;

export default GlobalStyles;
