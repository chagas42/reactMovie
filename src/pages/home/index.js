import React from 'react'; 
import { 
    Container,
    Header,
    Content,
    MovieArea,
    ImageArea,
    InfoArea,
    Image,
    Title, 
    Info,
    UserName,
    LeaveIcon
} from './styles'; 
import Movies from '../../movies.json'; 
import Logo from '../../assets/logo.png';


const Home = () => {
    return(
        <Container>
            <Header>
                <UserName>teste</UserName>
                <img src={Logo} height={72} />
                <LeaveIcon/>
            </Header>
            <Content>
                {Movies.map((e, i) => {
                    return(
                    <MovieArea key={i}>
                        <ImageArea>
                            <Image src={e.imagem}/>
                        </ImageArea>
                        <InfoArea>
                            <Title>{e.titulo}</Title>
                            <Info>{e.genero}, {e.ano}</Info>
                        </InfoArea>
                    </MovieArea>
                    )
                })}
            </Content>
        </Container>
    ); 
}; 

export default Home; 