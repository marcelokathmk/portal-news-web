import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/Home';
import DashboardAdm from '../pages/adm/Dashboard';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/dashboardadm' component={DashboardAdm} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>    
)