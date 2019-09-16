import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookieStorage from '../persistence/cookieStorage';

const { get } = cookieStorage();

const PrivateRoute = ({ component: Component, redirectRoute = '' , ...rest }) => (
  <Route {...rest} render={(props) => {
    const currentUser = get('accessKey'); // Obtenemos la cookie de sesion
    if (!currentUser) {
      // no ha iniciado sesión, así que redirigimos a la página de inicio de sesión con la URL
      return <Redirect to={{ pathname: redirectRoute }}/>;
    }
    // autorizado, entonces devolvemos el componente
    return <Component {...props} />;
  }} />
);

export default PrivateRoute;
