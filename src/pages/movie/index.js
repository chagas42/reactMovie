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
    TextList, 
    AcceptButton
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

        const list = JSON.parse(localStorage.getItem('Movies')); 
        
        for(let i=0; i<list.length; i++){

            if(list[i].id == id){
                setFav(!fav);
            }

        }       

    }, [])



    const [ data, setData ] = useState(); 

    const { id } = useParams(); 
    const [ fav, setFav ] = useState(false);
    

    const addList = () => {
        const list = JSON.parse(localStorage.getItem('Movies')); 
        list.push({id:id, titulo:data.titulo, genero:data.genero, ano:data.ano});
        localStorage.setItem('Movies', JSON.stringify(list));
        setFav(!fav); 
    }; 



    
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
                        {fav != true && 
                            <ButtonArea>
                                <MoreButton onClick={()=>{addList()}}>+</MoreButton>
                                <TextList>Adicionar na listaaaaa</TextList>
                            </ButtonArea>
                        }
                        {fav == true &&
            
                        <ButtonArea>
                            <AcceptButton>&#10004;</AcceptButton>
                            <TextList>Adicionado!</TextList>
                        </ButtonArea>
                        }

                    </List>
                </RigthArea>
            </>
            }        
        </Container>        
    ); 
}; 

export default Movie; 