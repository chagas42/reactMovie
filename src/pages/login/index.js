import React, { useState } from 'react'; 
import Link from 'react-router-dom'; 
import InputEmail from '../../components/InputEmail'; 
import Logo from '../../assets/logo.png';

import { Form, Container, Image } from './styles';

const Login = ( ) => {

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (!email || !password ){

            setError("Preencha e-mail e senha para continuar!");

        } else {
            try {

                if( email == "testewebdev@pertoeducacao.com" || password == "web@dev@2020"){
                    
                    window.location.href = '/app';
                    
                }
            } catch(error){

                 setError("dados incorretos");

            }
           
        }
    }; 

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    return(
        <Container>
            <Image src={Logo} alt="Movies Logo"/>
            <Form onSubmit={handleLogin}>
                {error && <p>{error}</p>}
                <InputEmail
                    type="email"
                    placeholder="E-mail"
                    onChange={(e)=>setEmail(e)}
                />
                <InputEmail
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e)}
                />
                <button type="submit">Login</button>
                <span>Não tem uma conta? <a href='#'>Registre-se</a></span>
            </Form>
        </Container>
    ); 
}; 

export default Login; 