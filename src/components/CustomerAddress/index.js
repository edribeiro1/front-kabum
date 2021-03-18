import React from 'react';
import {Card, CardContent, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function CustomerAddress({text, index, removeAddress}) {

    function onClick() {
        removeAddress(index);
    }

    return (
        <Card variant="outlined" style={{'margin': '10px 0px'}}>
            <CardContent style={{ padding:'5px 10px'}}>
                {text}
                <IconButton aria-label="delete" onClick={ onClick } color='secondary'>
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default CustomerAddress;