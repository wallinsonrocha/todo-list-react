import {FaBars} from 'react-icons/fa'
import { Container, Icon } from './style'
import MenuArea from './Menu'
import './style.css'

import { useState } from 'react'

import { useLocation } from 'react-router';
import { useEffect } from 'react';

export default function Header(props){

    const [active, setActive] = useState(false);
    const [name, setName] = useState("");
    
    //Essa parte foi contribuída por Pedro Flaminio
    //Início
    let location = useLocation()
    useEffect(() => {
        switch(location.pathname){
            case "/": setName("Todos"); break;
            case "/hoje": setName("Hoje"); break;
            case "/7-dias": setName("Próximos 7 dias"); break;
            case "/30-dias": setName("Próximos 30 dias"); break;
            case "/90-dias": setName("Próximos 90 dias"); break;
            case "/180-dias": setName("Próximos 180 dias"); break;
            case "/365-dias": setName("Próximos 365 dias"); break;
            case "/este-ano": setName("Este ano"); break;
            case "/concluidos": setName("Concluídos"); break;
            case "/nao-concluidos": setName("Não concluídos"); break;
            case "/atrazados": setName("Atrazados"); break;
        }
    },[location.pathname])
    //Fim

    return(
        <>
            <Container>
                <Icon>
                    <FaBars className='menu' onClick={()=>{setActive(!active)}}/>
                    <p className='area'>{name}</p>
                </Icon>
                <h1 className='logo'>To do list</h1>
            </Container>
            <MenuArea active={active} setName={setName}/>
        </>
    )
}