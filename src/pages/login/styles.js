import styled from 'styled-components'; 

export const Container = styled.div`
    display:flex; 
    flex-direction:column;
    align-items:center; 
    justify-content:center;
    height:100vh; 
    padding:32px;
    width:100%;
    background-color:#121214;
`;

export const Form = styled.form`
    margin-top:100px;
    width:100%; 
    max-width:480px;
    background-color:rgb(32, 32, 36);
    display:flex;
    flex-direction:column; 
    border-radius:5px;
    padding:64px !important; 
    align-items:center;
    justify-content:space-between;

    p {
        color:#ff3333;
        margin-bottom:25px; 
        border:1px solid #ff3333; 
        padding:10px; 
        width:100%; 
        text-align:center;
    }

    button {
        color:#fff; 
        font-size:17px; 
        background:#31afb4;
        height:56px; 
        border:0; 
        border-radius:5px; 
        width:100%;
        outline:none;
        cursor: pointer;
        text-transform:uppercase;
        font-weight:bold;
        :hover {
            color:#31afb4;
            background-color:#fff;
            border:1px solid #31afb4;
        }
        margin-top:20px;
    }

    span {
        color:#fff;
        font-size:14px; 
        margin-top:45px;
        margin-bottom:10px;
    }
    a { 
        text-decoration:none;
        font-weight:bold;
        color:#31afb4
    }
`; 

export const Image = styled.img`
    
`; 
