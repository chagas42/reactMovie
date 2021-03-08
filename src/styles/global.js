import styled from 'styled-components'; 
import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    }
    
    body, html {
    background: #eee;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    }
`; 

export const HeaderArea = styled.div`
    display:flex;
    flex:1;
    width:100%;
    max-width:1024px;
    height:102px; 
    flex-direction:row; 
    justify-content:space-between; 
    align-items:center;
    a {
        cursor: pointer;
        text-decoration:none; 
    }
`; 
export const UserName = styled.h3`
    max-width:35px;
    color:white;
    font-size:18px;
    &:hover {
        color:#31afb4;
        cursor:pointer;
    }
`; 
export const Header = styled.div`
    display:flex;
    flex:1;
    width:100%; 
    background-color:#202024; 
    align-items:center;
    justify-content:center;
`; 
