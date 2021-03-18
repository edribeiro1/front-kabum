import React from 'react';
import {Container, Card, CardContent, Button} from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { clearToken } from '../../middlewares/auth';

const Layout = ({ children }) => (<div style={{'marginTop':'10px'}}>
        <Button
            variant="contained"
            color="secondary"
            startIcon={<MeetingRoomIcon />}
            style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px'
            }}
            onClick={clearToken}
        >
            Sair
        </Button>
        <Container maxWidth='lg'>
            <Card variant="outlined">
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </Container>
    </div>
);


export default Layout;