import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>    
)