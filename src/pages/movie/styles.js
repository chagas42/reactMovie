import styled from 'styled-components'; 

export const Container = styled.div`
   display:flex; 
    width:100%; 
    height:900px;
    max-height:1000px; 
    align-items:center;
    flex-direction:row;
    padding:40px 40px ;
    background-color:#121214;
    color:white;
`; 


export const LeftArea = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    width:100%;
    height:100%; 
    padding:10px;
    align-items:flex-start;
`; 

export const RigthArea = styled.div`
    display:flex;   
    flex-direction:column;
    justify-content:center;
    margin-left:150px;
    flex:1;
    width:100%;
    height:100%; 
    /* background-color:bisque; */
`; 

export const Info = styled.div`
    display:flex;
    width:405px;
    flex-direction:column; 
    /* background-color:white; */
    align-items:flex-start;
`;

export const InfoArea = styled.div`
    display:flex; 
    align-items: flex-end;
    margin-bottom:40px;
`; 

export const Title = styled.h1`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:22px;
    margin-bottom:10px;
    align-self:flex-end;
`; 


export const SubInfo = styled.h2`
    font-size:16px;
    align-self:flex-end; 
`; 

export const Embed = styled.div`
    flex:1;
    min-height:400px;
    height:100%;
`; 

export const SinopseArea = styled.div`
    border:2px solid white; 
    width:100%;
    align-items:flex-end;
    font-size:22px;
    padding:20px 20px;
    text-align:justify;
    &:hover{ 
        border: 2px solid #31afb4;
        cursor: pointer;
    }
`; 

export const MoreButton = styled.button`
    height:50px; 
    width:50px; 
    border-radius:50px; 
    background-color:#fff;
    justify-content:center;
    align-items:center;
    font-size:35px;
    font-weight:bold; 
    border: 0px solid none ;
    color:#31afb4;
    transition:all 0.5s ease;
    &:hover{
        background-color:#fff;
        color:#31afb4;
        cursor:pointer;
        border-radius:10px;
    }
    margin-right:15px;
`; 

export const AcceptButton = styled.button`
    display:flex;
    width:50px; 
    height:50px; 
    justify-content:center;
    align-items:center; 
    font-size:35px; 
    font-weight:bold; 
    background-color:transparent;
    border:none;
    color:#31afb4;
    margin-right:15px;
`; 

export const List  = styled.div`
    flex:1;
    margin-top:25px;
`; 

export const ButtonArea = styled.div`
    flex:1; 
    display:flex;
    flex-direction:row; 
    align-items:center;
    background-color:#202024;
    padding:10px;
    border-radius:5px;
`; 

export const TextList = styled.h1`
    font-size:22px;
`; 

export const MovieArea = styled.div``; 