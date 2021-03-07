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
    LeaveIcon,
    HeaderArea
} from './styles'; 
import Movies from '../../movies.json'; 
import Logo from '../../assets/logo.png';
import LogoutIcon from '../../assets/logout.png'; 

const user = localStorage.getItem('email'); 

const Home = () => {
    return(
        <Container>
            <Header>
                <HeaderArea>    
                    <UserName>{user}</UserName>
                    <img src={Logo} height={72}/>
                    <a href="/login">
                        <img src={LogoutIcon} height={35}/> 
                    </a>
                </HeaderArea>
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