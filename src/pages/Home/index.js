import React from 'react';
import Button from '../../components/Button';

function Home() {
    return (
        <div>
            <Button onClick={() => alert('hello')}>Entrar</Button>
            <Button onClick={() => alert('hello')}>Sair</Button>
        </div>
    )
}

export default Home;