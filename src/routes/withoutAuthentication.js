// import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Login from '../pages/Login';

const WithoutAuthentication = () => (
    <Switch>
        <Route>
            <Login />
        </Route>
    </Switch>
);

export default WithoutAuthentication;