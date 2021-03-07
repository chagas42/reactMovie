import React from 'react'; 
import styled from 'styled-components'; 

const InputEmail = ( props ) => {
    

    return(
        <InputArea>
            <Input 
                onChange={props.onChange} 
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
            />        
        </InputArea>
    ); 
}; 

const InputArea = styled.div`
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction:row;
`; 
const Input = styled.input`
    flex:1; 
    height:50px; 
    margin-bottom:35px; 
    padding:0 20px; 
    color:rgb(255, 255, 255); 
    font-size:17px;
    font-family:Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    max-width:480px;
    width:100%; 
    border:0;
    &::placeholder {
        color:#999;
    }
    outline:none;
    background-color:#121214;

`; 


export default InputEmail; 