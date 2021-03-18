// import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import ListCustomers from '../pages/ListCustomers';
import FormCustomer from '../pages/FormCustomer';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact >
                <ListCustomers/>
            </Route>
            <Route path="/home" exact >
                <ListCustomers/>
            </Route>
            <Route exact path="/customer">
                <FormCustomer />
            </Route>
            <Route path="/customer/:id">
                <FormCustomer />
            </Route>
            <Route>
                <h1>Página não encontrada</h1>
            </Route>
        </Switch>
    </Layout>
);

export default AppRoutes;