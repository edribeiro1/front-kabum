// import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Auth from './auth';
import App from './app';

const Routes = () => {
    const logged = true;
    return (
        <BrowserRouter>
            { logged ? <App /> : <Auth/> }
        </BrowserRouter>
    );
}

export default Routes;