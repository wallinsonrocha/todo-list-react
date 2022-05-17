import { Menu, Option } from './style'
import {Link} from 'react-router-dom'   
import './style.css'

export default function MenuArea(props){

    function CloseMenu(){
        props.setActive(false);
    }

    return(        
            <Menu active={props.active}>
                <Link className='Link-format' to="/" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Todos
                    </Option>
                </Link>
                                
                <Link className='Link-format' to="/hoje" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Hoje
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/7-dias" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Próximos 7 dias
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/30-dias" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Próximos 30 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/90-dias" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Próximos 90 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/180-dias" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Próximos 180 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/365-dias" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Próximos 365 dias
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/este-ano" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Este ano
                    </Option>
                </Link>

                <Link className='Link-format' to="/concluidos" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Concluídos
                    </Option>
                </Link>

                <Link className='Link-format' to="/nao-concluidos" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Não concluídos
                    </Option>
                </Link>

                <Link className='Link-format' to="/atrazados" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Atrazados
                    </Option>
                </Link>

                <Link className='Link-format' to="/sobre" onClick={()=>{CloseMenu()}}>
                    <Option>
                        Sobre
                    </Option>
                </Link>
            </Menu>
    )
}