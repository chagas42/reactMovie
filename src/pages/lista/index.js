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
    Year
} from './styles'; 




const Lista = () => {

    // useEffect(() => {
        
    //     const local = JSON.parse(localStorage.getItem('Movies'));
    //     setArray(local); 
    //     console.log(array); 
    // }, [])

    const [array, setArray] = useState(JSON.parse(localStorage.getItem('Movies'))); 
    console.log(array);

    return(
        <Container>
            <TableArea>
                <TableTitle>
                    <span>Id</span>
                    <span>Titulo</span>
                    <span>Gênero</span>
                    <span>Ano</span>
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
                            </ListItem>
                        )
                    })}
                </ListArea>
            </TableArea>
        </Container>
    ); 
}; 

export default Lista; 