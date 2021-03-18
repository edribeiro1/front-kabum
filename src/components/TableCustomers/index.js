import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import api from '../../services/api';
import ButtonTable from '../ButtonTable';
import { getToken, clearToken } from '../../middlewares/auth';
import { Link } from 'react-router-dom';

function TableCustomers() {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        api.get('/customer', {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then(
            res => {
                setRows(res.data.data.customers);
            }
        ).catch((error) => {
            error = {error};
            if (error.error.response.status === 401) {
                clearToken();
            }
        })
    }, [])

    function onDelete(event) {
        let elem = event.target;
        if (event.target.tagName !== 'BUTTON' ){
            elem = event.target.closest('button')
        } 
        let id = parseInt(elem.getAttribute('data-id'));

        api.delete(`/customer/${id}`,
        {
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Content-Type':'application/json'
            }
        })
        .then(
            res => {
                console.log('aqui');
                let newState = [];
                for(let i in rows ) {
                    if (parseInt(rows[i].id) !== parseInt(id)){
                        newState.push(rows[i])
                    }
                }
                setRows(newState);
            }
        ).catch((error) => {
            error = {error};
            if (error.error.response.status === 401) {
                clearToken();
            }
        })
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'name', headerName: 'Nome', width: 200},
        { field: 'birth_date', headerName: 'Data de aniversário', width: 180},
        { field: 'cpf', headerName: 'CPF', width: 140},
        { field: 'rg', headerName: 'RG', width: 140},
        { field: 'phone_number', headerName: 'Telefone', width: 140},
        { 
            field: '', 
            headerName: 'Ações', 
            width: 130, 
            sortable: false, 
            disableClickEventBubbling:true,
            renderCell: (params) => {
                return (
                    <>
                        <ButtonTable onClick={onDelete} dataId={params.row.id} action={'delete'}/>
                        <Link to={`/customer/${params.row.id}`}><ButtonTable dataId={params.row.id} action={'update'}/></Link>
                    </>
                )
            }
        }
    ];
   
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection={false} disableSelectionOnClick={true}/>
        </div>
    )
}


export default TableCustomers;