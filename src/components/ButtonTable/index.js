import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

function ButtonTable({onClick, dataId, action}) {

    let icon = <DeleteIcon />;
    let color = 'secondary';
    
    if (action === 'update') {
        icon = <CreateRoundedIcon />
        color = 'primary'
    }



    return (
       <IconButton aria-label={action} onClick={onClick} data-id={dataId} color={color}>
            {icon}
      </IconButton>
    )
}


export default ButtonTable;