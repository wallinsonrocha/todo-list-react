import {FaBars} from 'react-icons/fa'
import { Container, Icon } from './style'
import MenuArea from './Menu'
import './style.css'

import { useState } from 'react'

export default function Header(props){

    const [active, setActive] = useState(false);
    const [name, setName] = useState(window.localStorage.getItem('name'));

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