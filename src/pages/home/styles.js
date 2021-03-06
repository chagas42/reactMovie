import styled from 'styled-components'; 
export const Container = styled.div`
    display:flex; 
    flex-direction:column;
    align-items:center; 
    height:100%; 
    width:100%;
    background-color:#121214;
`; 
export const Content = styled.div`
    display:flex;
    flex:1;
    width:100%;
    padding-top:25px;
    max-width:1920px;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    margin-top:45px;
    a {
        text-decoration:none;
    }
`; 
export const MovieArea = styled.div`
    display:flex; 
    justify-content:center;
    align-items:center;
    flex-direction:column;  
    padding-bottom:10px;
    margin-bottom:50px;
    margin-left:10px;
    margin-right:10px;
    border:4px solid #202024;
    cursor:pointer;
    &:hover {
        border:4px solid #31afb4;
    }
`; 
export const ImageArea = styled.div`
    flex:2;
`; 
export const Image = styled.img`
    width:300px;
    height:300px;
`;
export const InfoArea = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    border-top:2px solid #202024;
    margin-top:0px;
    padding-top:25px;
    width:100%;
    padding:10px;
`; 
export const Title = styled.div`
    font-size:18px;
    color:white;
    font-weight:bold;
`; 
export const Info = styled.div`
    margin-top:15px;
    color:white;
    font-size:19;
    font-style:italic;
`;
