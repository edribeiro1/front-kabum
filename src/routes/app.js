// import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Layout>
);

export default AppRoutes;