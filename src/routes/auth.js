// import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Login from '../pages/Login';

const AuthRoutes = () => (
    <Switch>
        <Route path="/" component={Login} />
    </Switch>
);

export default AuthRoutes;