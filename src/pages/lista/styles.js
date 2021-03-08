import styled from 'styled-components'; 

export const Container = styled.div`
    display:flex;
    width:100%;
    height:900px;
    background-color:#121214; 
    padding:90px; 
    justify-content:center;
`; 

export const TableArea = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-start;
    flex-direction:column;
    background-color:white;
    border-radius:5px;
    padding:25px;

    hr{ 
        margin-top:10px;
        border:1px solid black;
    }
`; 

export const TableTitle = styled.div`
    display:flex;
    flex-direction:row; 
    span { 
        flex:3; 
        font-size:18px; 
        font-weight:bold;
    }
`; 

export const ListArea = styled.div`
    margin-top:30px;
    flex:1;
    display:flex;
    flex-direction:column;
    /* background-color:black; */
`; 

export const ListItem = styled.div`
    display:flex; 
    flex:1;
    flex-direction:row;
    justify-self:flex-start;
    justify-content:space-evenly;
`;

export const Id = styled.div`
    flex:1;
`; 

export const Title = styled.div`
    flex:2;
`;

export const Genre = styled.div`
    flex:2;
`; 

export const Year = styled.div`
    flex:2;
`; 
