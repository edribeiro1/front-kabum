import React, { useState } from 'react';
import { Typography, TextField, Button} from '@material-ui/core';


function ControlAddress({onSubmit}) {

    const [address, setAddress] = useState('');

    function addAddress() {
        if (address) {
            onSubmit(address)
        }
        setAddress('');
    }

    return (
        <>
            <Typography variant='h5'>
                Adicionar endereços
            </Typography>

            <TextField
                value={address}
                onChange={event => {
                    setAddress(event.target.value)
                }}
                id='address' 
                name='address' 
                label='Endereço' 
                type='text' 
                variant='outlined' 
                margin='normal' 
                fullWidth 
            />

            <Button onClick={addAddress} variant="contained" color="primary" style={{ marginBottom: '10px' }}>Adicionar</Button>
        </>
    );
}

export default ControlAddress;