import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {
    Header,
    HeaderArea, 
    UserName
} from '../styles/global'; 
import Logo from '../assets/logo.png';
import LogoutIcon from '../assets/logout.png';  

const user = localStorage.getItem('email'); 
const resetStorage = () => {
    localStorage.clear(); 
    console.log('teste');
}; 

const HeaderContent = () => {
    return(
        <Header>
            <HeaderArea>
                <Link to='/app/lista'>
                    <UserName>{user}</UserName>
                </Link>    
                <Link to='/app/catalogo'>
                    <img src={Logo} height={72}/>
                </Link>
                <Link to="/login" onClick={()=>{resetStorage()}}>
                    <img src={LogoutIcon} height={35}/> 
                </Link>
            </HeaderArea>
        </Header>
    ); 
}; 

export default HeaderContent; 