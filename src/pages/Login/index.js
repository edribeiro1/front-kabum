import React, { useState } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography} from '@material-ui/core';
import {validatePassword, validateUsername} from '../../models/login.js';
import {setToken} from '../../middlewares/auth';
import api from '../../services/api'
import ImageLogo from '../../assets/logo.svg';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        username: {
            valid: true,
            message: ''
        },
        password: {
            valid: true,
            message: ''
        }
    });

    const rules = {
        'username': validateUsername,
        'password': validatePassword
    }

    function validation(event) {
        const {name, value} = event.target;
        const isValid = rules[name](value);
        const newState = {...errors};
        newState[name] = isValid;
        setErrors(newState);
    }

    function validToSend() {
        for (let field in errors) {
            if (!errors[field].valid) {
                return false;
            }
        }
        return true;
    }

    function handleSubmit () {

        if (validToSend()) {
            api.post(`/auth`, { username, password })
                .then(res => {
                    setToken(res.data.data.token);
                    window.location.href = '/'
                })
                .catch( res => {
                    setErrors({
                        username: {
                            valid: false,
                            message: 'Usuário inválido'
                        },
                        password: {
                            valid: false,
                            message: 'Senha inválida'
                        }
                    })
                })
        }
    }


    return (
        <Container maxWidth='sm'>
            <br />
            <Card variant="outlined">
                <CardContent>

                    <img src={ImageLogo} alt='Imagem Logo'/>
                    <Typography variant='h5' align='center'>Ambiente administrativo</Typography>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        handleSubmit();
                    }}>

                        <TextField
                            value={username}
                            onChange={event => {
                                setUsername(event.target.value)
                            }}
                            onBlur={validation}
                            error={!errors.username.valid}
                            helperText={errors.username.message}
                            id='username' 
                            name='username' 
                            label='username' 
                            type='text' 
                            variant='outlined' 
                            margin='normal' 
                            fullWidth 
                            required
                        />

                        <TextField
                            value={password}
                            onChange={event => {
                                setPassword(event.target.value)
                            }}
                            onBlur={validation}
                            error={!errors.password.valid}
                            helperText={errors.password.message}
                            id='password' 
                            name='password' 
                            label='Password' 
                            type='password' 
                            variant='outlined' 
                            margin='normal' 
                            fullWidth 
                            required
                        />

                        <Button type='submit' variant="contained" color="primary" fullWidth>Entrar</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>

    )
}

export default Login;