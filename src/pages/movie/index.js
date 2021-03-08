import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { 
    Container,
    LeftArea,
    RigthArea,
    Title,
    Info,
    InfoArea,
    SubInfo,
    Embed,
    List, 
    SinopseArea,    
    MoreButton, 
    ButtonArea,
    TextList
} from './styles'; 
import api from '../../services/api'; 

const Movie = () => {
    
    useEffect(()=>{

        api.get(`server/testes/filmes/${id}`)
            .then((response) => {
                setData(response.data); 
            })
            .catch((error) => {
                console.error(error); 
            })

    }, [])

    const [ data, setData ] = useState(); 
    const { id } = useParams(); 

    return(
        <Container>
            {data != undefined && 
            <>
                <LeftArea >

                    <InfoArea>
                        <Info>
                            <Title>{data.titulo}</Title>                    
                            <SubInfo>{data.genero}, {data.ano}</SubInfo>
                        </Info>    
                    </InfoArea>
                    
                    <SinopseArea>
                        {data.sinopse}
                    </SinopseArea>
                </LeftArea>

                <RigthArea>
                    <Embed>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.trailerIdYoutube}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Embed>
                    <List>
                        <ButtonArea>
                            <MoreButton>+</MoreButton>
                            <TextList>Adicionar na lista</TextList>
                        </ButtonArea>
                    </List>
                </RigthArea>
            </>
            }        
        </Container>        
    ); 
}; 

export default Movie; 