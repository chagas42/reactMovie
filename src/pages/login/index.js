import React, { useState } from 'react'; 
// import Link from 'react-router-dom'; 
import Input from '../../components/Input'; 
import Logo from '../../assets/logo.png';
import api from '../../services/api'; 

import { Form, Container, Image } from './styles';

const Login = ( ) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const setLocalStorage = ( data ) => {
        localStorage.setItem('token', data.token); 
        localStorage.setItem('isLogged', true);
        localStorage.setItem('email', email);
    }; 

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (email === '' || password === '' ){

            setError("Preencha e-mail e senha para continuar!");

        } else {
            
                api.post('/server/testes/login',{
                    "email":email, 
                    "senha":password
                })
                .then((response)=>{
                    console.log(response);                    
                    if(response.status == 200){
                        setLocalStorage(response.data);
                        window.location.href = '/app';
                    }

                }, (error)=>{
                    setError("dados incorretos");
                });
           
        }
    }; 


    return(
        <Container>
            <Image src={Logo} alt="Movies Logo"/>
            <Form onSubmit={handleLogin}>
                {error && <p>{error}</p>}
                <Input
                    type="email"
                    placeholder="E-mail"
                    onChange={e=>setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <span>Não tem uma conta? <a href='#'>Registre-se</a></span>
            </Form>
        </Container>
    ); 
}; 

export default Login; 