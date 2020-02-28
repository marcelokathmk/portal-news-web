import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Usuarios from '../pages/adm/usuario/Usuarios';
import PrivateRoute from '../config/PrivateRoutes';
import Posts from '../pages/adm/post/Post';
import Perfis from '../pages/adm/perfil/Perfil';

export default props => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path='/dashboardadm/usuarios' component={Usuarios} />
            <PrivateRoute path='/dashboardadm/posts' component={Posts} />
            <PrivateRoute path='/dashboardadm/perfis' component={Perfis} />
        </Switch>
    </BrowserRouter>
)