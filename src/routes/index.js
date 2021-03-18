import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import WithoutAuthentication from './withoutAuthentication';
import App from './app';
import {isLogged} from '../middlewares/auth'


const Routes = () => {
    const logged = isLogged();
    return (
        <BrowserRouter>
            { logged ? <App /> : <WithoutAuthentication/> }
        </BrowserRouter>
    );
}

export default Routes;