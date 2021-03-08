import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 

import Login from './pages/login'; 
import Home from './pages/home'; 
import Movie from './pages/movie'; 
import Lista from './pages/lista'; 
import Header  from './components/Header'; 

const isLogged = localStorage.getItem('isLogged'); 

const PrivateRoute = ({ children, ...rest }) => {
    return(
        <Route {...rest}>
            {isLogged === 'true' ? children : <Redirect to="/login"/>}
        </Route>
    ); 
}; 

const Routes = (props) => {

    return(
        <Switch>
            <PrivateRoute  exact path='/app/catalogo'>
                <Header/>
                <Home/>
            </PrivateRoute>

            <Route path='/login'>
                <Login/>
            </Route>

            <PrivateRoute exact path='/app/filme/:id' >
                <Header/>
                <Movie/>
            </PrivateRoute>

            <PrivateRoute axact path='/app/lista'>
                <Header/>
                <Lista/>
            </PrivateRoute>

            <Route exact path='/*'>
                <Redirect to='/login'/>
            </Route>

        </Switch>
    ); 
}; 

export default Routes; 