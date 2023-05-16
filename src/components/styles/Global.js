import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        place-items: center;
        background-color: ${(props) => (props.dark ? '#141D2F' : '#f6f8ff')};
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
            overflow-x: hidden;
        }
        #root{
            place-content: start;
            margin-top: 1.5em;
        }
    }
`;

export default GlobalStyles;
