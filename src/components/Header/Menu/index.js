import { Menu, Option } from './style'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function MenuArea(props){

    const [content, setContent] = useState(localStorage.getItem('name'));

    useEffect(()=>{
        window.localStorage.setItem('name', content);
        props.setName(localStorage.getItem('name'))
    },[content])

    return(        
            <Menu active={props.active}>
                <Link to="/">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Todos
                    </Option>
                </Link>
                
                <Link to="/sem-data-e-hora">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Sem data e hora
                    </Option>
                </Link>
                
                <Link to="/hoje">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Hoje
                    </Option>
                </Link>
                
                <Link to="/esta-semana">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Esta semana
                    </Option>
                </Link>
                
                <Link to="/este-mes">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Este mês
                    </Option>
                </Link>
                
                <Link to="/este-ano">
                    <Option onClick={(e)=>{setContent(e.target.textContent)}}>
                        Este ano
                    </Option>
                </Link>
            </Menu>
    )
}