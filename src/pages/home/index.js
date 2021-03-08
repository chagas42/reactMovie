import React, { useState, useEffect } from 'react'; 
import { Link, useParams } from 'react-router-dom'; 


import { 
    Container,
    Content,
    MovieArea,
    ImageArea,
    InfoArea,
    Image,
    Title, 
    Info,
} from './styles'; 

import api from '../../services/api'; 




const Home = () => {
    
    useEffect(() => {
        api.get('server/testes/filmes')
        .then(( response ) => {
            setData(response.data)
        })
        .catch((err) => {
            console.error(err); 
        });
        
        if(!localStorage.hasOwnProperty('Movies')){

            localStorage.setItem('Movies',JSON.stringify([]));

        }

    }, [])

    const [ data, setData ] = useState(); 
    return(
        <Container>
            <Content>
                {data != undefined &&
                    data.map((e, i) => {
                        return(
                        <Link to={`/app/filme/${e.id}`} key={i} >
                            <MovieArea >
                                <ImageArea>
                                    <Image src={e.imagem}/>
                                </ImageArea>
                                <InfoArea>
                                    <Title>{e.titulo}</Title>
                                    <Info>{e.genero}, {e.ano}</Info>
                                </InfoArea>
                            </MovieArea>
                        </Link>                  
                        );
                    })
                }               
            </Content>

        </Container>
    ); 
}; 

export default Home; 