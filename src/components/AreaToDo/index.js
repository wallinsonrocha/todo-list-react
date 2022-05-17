import { Area, AreaAdd, TitleAdd, Input, DHAdd, InputDH } from "./style"
import { FaPlus, FaRegClock, FaCalendarAlt } from "react-icons/fa"
import './style.css'

import List from "../List";

import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {addTodo} from "../../redux/reducers/todoListSlice";

export default function AreaToDo() {

    const [textActivity, setTextActivity] = useState('');
    const [dataActivity, setDataActivity] = useState(new Date().toISOString().slice(0, -14));
    const [hourActivity, setHourActivity] = useState(new Date().toString().slice(16, -41));

    const dispatch = useDispatch();

    useEffect(()=>{
        if(dataActivity == ''){
            setDataActivity(new Date().toISOString().slice(0, -14));
        }
    },[dataActivity]);

    useEffect(()=>{
        if(hourActivity == ''){
            setHourActivity(new Date().toString().slice(16, -41));
        }
    },[hourActivity])

    function add(){      
        //Objeto
        let newAtv = {
            title: textActivity,
            date: dataActivity,
            hour: hourActivity,
        }

        //Dispatch
        if(textActivity != ''){
            dispatch(addTodo(newAtv));
            setTextActivity('');
            setDataActivity(new Date().toISOString().slice(0, -14));
            setHourActivity(new Date().toString().slice(16, -41));
        } else {
            alert('Você precisa adicionar alguma atividade!');
        }
    }

    return (
        <Area>
            <AreaAdd>
                <TitleAdd>
                    <Input value={textActivity} onChange={(e) => { setTextActivity(e.target.value) }} placeholder={'Adicione uma atividade aqui...'} 
                    onKeyUp={(e)=>{
                        if(e.key === "Enter"){add()}
                    }}/>
                    <FaPlus onClick={()=>{add()}}/>
                </TitleAdd>
                <DHAdd>
                    <div className="center">
                        <FaCalendarAlt className="icon" />
                        <InputDH type={'date'} value={dataActivity} 
                        min={new Date().toISOString().slice(0, -14)}
                        onChange={(e) => { setDataActivity(e.target.value) }}
                        onKeyUp={(e)=>{
                            if(e.key === "Enter"){
                                add()
                            }
                        }}/>
                    </div>
                    <div className="center">
                        <FaRegClock className="icon" />
                        <InputDH type={'time'} value={hourActivity} 
                        onChange={(e) => { setHourActivity(e.target.value) }}
                        onKeyUp={(e)=>{
                            if(e.key === "Enter"){
                                add()
                            }
                        }}/>
                    </div>
                </DHAdd>
            </AreaAdd>
            <List />
        </Area>
    )
}