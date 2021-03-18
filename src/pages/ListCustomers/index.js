import React from 'react';
import {Button} from '@material-ui/core';
import TableCustomers from '../../components/TableCustomers';
import { Link } from 'react-router-dom';

function ListCustomers() {

    return (
        <>
            <Link to="/customer">
                <Button variant="contained" color="primary" style={{ marginBottom: '10px' }}>Adicionar</Button>
            </Link>
            
            <TableCustomers />
        </>
    )
}

export default ListCustomers;