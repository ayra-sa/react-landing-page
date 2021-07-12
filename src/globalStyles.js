import styled, { createGlobalStyle } from 'styled-components' 

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }
`;

export const Container = styled.div`
    width: 80%;
    /* margin: auto; */
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    /* padding-right: 100px;
    padding-left: 100px; */

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#555' : '#000') };
    white-space: nowrap;
    color: #fff;
    padding: ${({big}) => (big ? '12px 60px' : '8px 20px') };
`

export default GlobalStyle