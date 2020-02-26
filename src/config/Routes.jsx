import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardAdm from '../pages/adm/Dashboard';
import PrivateRoute from '../config/PrivateRoutes';
import Login from '../pages/login/Login';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path='/dashboardadm' component={DashboardAdm} />
            <PrivateRoute path='/' component={Home} />
            <PrivateRoute path='' component={Home} />
        </Switch>
    </BrowserRouter>    
)