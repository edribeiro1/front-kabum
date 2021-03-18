import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { TextField, Button, Typography, Card, CardContent } from '@material-ui/core';
import api from '../../services/api';
import { getToken, clearToken } from '../../middlewares/auth';

import CustomerAddress from '../../components/CustomerAddress';
import ControlAddress from '../../components/ControlAddress';


function FormCustomer() {

    const { id } = useParams()

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState([]);

    useEffect(() => {

        if (id) {
            api.get(`/customer/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + getToken()
                }
            }).then(
                res => {
                    let data = res.data.data;
                    let newStateAdrress = [];
                    for (let i in data.address) {
                        newStateAdrress.push(data.address[i].address)
                    }

                    setName(data.name ? data.name : '');
                    setBirthDate(data.birthDate ? data.birthDate : '');
                    setCpf(data.cpf ? data.cpf : '');
                    setRg(data.rg ? data.rg : '');
                    setPhoneNumber(data.phoneNumber ? data.phoneNumber : '');
                    setAddress(newStateAdrress);
                }
            )
                .catch((error) => {
                    error = { error };
                    if (error.error.response.status === 401) {
                        clearToken();
                    }
                })
        }


    }, [id])

    let history = useHistory();

    function addAddress(newAddress) {
        setAddress([...address, newAddress]);
    }

    function removeAddress(index) {
        let newState = address.slice();
        newState.splice(index, 1);
        setAddress(newState);
    }

    function save() {

        let data = {
            name,
            birthDate,
            cpf,
            rg,
            phoneNumber,
            address
        }

        if (id) {
            
            api.put(`/customer/${id}`, data,{
                headers: {
                    Authorization: 'Bearer ' + getToken()
                }
            }).then(
                res => {
                   history.push('/');
                }
            ).catch((error) => {
                error = { error };
                if (error.error.response.status === 401) {
                    clearToken();
                }
            })

        }
        else {
            api.post(`/customer/`, data, {
                headers: {
                    Authorization: 'Bearer ' + getToken()
                }
            }).then(
                res => {
                    history.push('/');
                }
            ).catch((error) => {
                error = { error };
                if (error.error.response.status === 401) {
                    clearToken();
                }
            })
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                save()
            }}>
                <Typography variant='h5' align='center'>{id ? 'Edição de Cliente' : 'Cadastro de Cliente'}</Typography>
                <TextField
                    value={name}
                    onChange={event => {
                        setName(event.target.value)
                    }}
                    id='name'
                    name='name'
                    label='Nome'
                    type='text'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                />

                <TextField
                    value={birthDate}
                    onChange={event => {
                        setBirthDate(event.target.value)
                    }}
                    id='birthDate'
                    name='birthDate'
                    label='Data de nascimento'
                    type='date'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                />

                <TextField
                    value={cpf}
                    onChange={event => {
                        setCpf(event.target.value)
                    }}
                    id='cpf'
                    name='cpf'
                    label='CPF'
                    type='text'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                />

                <TextField
                    value={rg}
                    onChange={event => {
                        setRg(event.target.value)
                    }}
                    id='rg'
                    name='rg'
                    label='RG'
                    type='text'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                />

                <TextField
                    value={phoneNumber}
                    onChange={event => {
                        setPhoneNumber(event.target.value)
                    }}
                    id='phoneNumber'
                    name='phoneNumber'
                    label='Telefone'
                    type='text'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                />

                <Card variant="outlined" style={{'margin': '10px 0px'}}>
                    <CardContent>
                        <ControlAddress onSubmit={addAddress} />
                        {address.map((address, index) => {
                            return (<CustomerAddress text={address} key={index} index={index} removeAddress={removeAddress} />)
                        })}
                    </CardContent>
                </Card>

                <Button type='submit' variant="contained" color="primary" fullWidth style={{'margin': '10px 0px'}}>{id ? 'Salvar' : 'Cadastrar'}</Button>
                <Link to='/'><Button variant="contained" color="default" fullWidth>Cancelar</Button></Link>
            </form>
        </>
    )
}

export default FormCustomer;