import React from 'react';

import logoRocketfy from '../../assets/Rocketfy.png';

import { Container } from './styles';


export default function Header() {
    return (
        <Container>
            <img src={logoRocketfy} alt="Logo Rocketfy"/>
        </Container>
    )
}
