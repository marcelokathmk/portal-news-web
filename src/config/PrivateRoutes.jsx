import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

    const usuario = localStorage.getItem('usuarioLogado');

    return (
        <Route
          {...rest}
          render={props =>
            usuario !== "undefined" ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
          }
        />
      )
}

export default PrivateRoute;