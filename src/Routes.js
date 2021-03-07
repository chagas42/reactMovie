import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 

import Login from './pages/login'; 
import Home from './pages/home'; 

const isLogged = localStorage.getItem('isLogged'); 
console.log(isLogged);

const PrivateRoute = ({ children, ...rest }) => {
    return(
        <Route {...rest}>
            {isLogged ? children : <Redirect to="/login"/>}
        </Route>
    ); 
}; 

const Routes = () => {
    return(
        <Switch>
            <PrivateRoute exact path='/app'>
                <Home/>
            </PrivateRoute>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='*'>
                <h1>Page Not Found</h1>
            </Route>
        </Switch>
    ); 
}; 

export default Routes; 