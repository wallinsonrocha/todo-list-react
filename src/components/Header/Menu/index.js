import { Menu, Option } from './style'
import {Link} from 'react-router-dom'   
import './style.css'

export default function MenuArea(props){
    return(        
            <Menu active={props.active}>
                <Link className='Link-format' to="/">
                    <Option>
                        Todos
                    </Option>
                </Link>
                                
                <Link className='Link-format' to="/hoje">
                    <Option>
                        Hoje
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/7-dias">
                    <Option>
                        Próximos 7 dias
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/30-dias">
                    <Option>
                        Próximos 30 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/90-dias">
                    <Option>
                        Próximos 90 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/180-dias">
                    <Option>
                        Próximos 180 dias
                    </Option>
                </Link>

                <Link className='Link-format' to="/365-dias">
                    <Option>
                        Próximos 365 dias
                    </Option>
                </Link>
                
                <Link className='Link-format' to="/este-ano">
                    <Option>
                        Este ano
                    </Option>
                </Link>

                <Link className='Link-format' to="/concluidos">
                    <Option>
                        Concluídos
                    </Option>
                </Link>

                <Link className='Link-format' to="/nao-concluidos">
                    <Option>
                        Não concluídos
                    </Option>
                </Link>

                <Link className='Link-format' to="/atrazados">
                    <Option>
                        Atrazados
                    </Option>
                </Link>
            </Menu>
    )
}