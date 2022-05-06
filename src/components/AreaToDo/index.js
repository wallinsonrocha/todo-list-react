import { Area, AreaAdd, TitleAdd, Input, DHAdd, InputDH } from "./style"
import { FaPlus, FaRegClock, FaCalendarAlt } from "react-icons/fa"
import './style.css'

import List from "../List";

import {useState} from 'react';

export default function AreaToDo(){

    const [textActivity, setTextActivity] = useState('');
    const [dataActivity, setDataActivity] = useState('');
    const [hourActivity, setHourActivity] = useState('');

    return(
        <Area>
            <AreaAdd>
                <TitleAdd>
                    <Input value={textActivity} onChange={(e)=>{setTextActivity(e.target.value)}} placeholder={'Adicione uma atividade aqui...'}/>
                    <FaPlus/>
                </TitleAdd>
                <DHAdd>
                    <div className="center">
                        <FaCalendarAlt className="icon"/>
                        <InputDH type={'date'} value={dataActivity} onChange={(e)=>{setDataActivity(e.target.value)}}/>
                    </div>
                    <div className="center">
                        <FaRegClock className="icon"/>
                        <InputDH type={'time'} value={hourActivity} onChange={(e)=>{setHourActivity(e.target.value)}}/>
                    </div>
                </DHAdd>
            </AreaAdd>    
            <List/>

        </Area>
    )
}