import React, { useState, useEffect } from 'react'; 
import {
    Container, 
    TableArea, 
    TableTitle,
    ListArea, 
    ListItem, 
    Id, 
    Genre, 
    Title, 
    Year, 
    TitleColumn, 
    Button
} from './styles'; 




const Lista = () => {

    const [array, setArray] = useState(JSON.parse(localStorage.getItem('Movies'))); 

    const handleClick = (i) => {
       
        array.splice(i, 1);
        localStorage.setItem('Movies',JSON.stringify(array));
        update();

    }; 

    const update = () => {
        
        setArray(JSON.parse(localStorage.getItem('Movies')));

    }

   



    return(
        <Container>
            <TableArea>
                <TableTitle>
                    <TitleColumn size='1' >Id</TitleColumn>
                    <TitleColumn size='2'>Titulo</TitleColumn>
                    <TitleColumn size='2'>Gênero</TitleColumn>
                    <TitleColumn size='2'>Ano</TitleColumn>
                </TableTitle>
                <hr/>
                <ListArea>
                    {array.map((e, i)=>{
                        
                        return(
                            <ListItem key={i}>
                                <Id>{e.id}</Id>
                                <Title>{e.titulo}</Title>
                                <Genre>{e.genero}</Genre>
                                <Year>{e.ano}</Year>
                                <Button onClick={()=>{handleClick(i)}} >&#128465;</Button>
                            </ListItem>
                        )
                    })}
                </ListArea>
            </TableArea>
        </Container>
    ); 
}; 

export default Lista; 