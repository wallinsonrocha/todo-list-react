import { useSelector, useDispatch } from "react-redux"
import { removeTodo, chekedTodo } from "../../redux/reducers/todoListSlice";
import { FaTrash } from "react-icons/fa";

import { Activity } from "./style";

export default function P90Dias(){

    const todos = useSelector(state => state.todo.todoList);
    const dispatch = useDispatch();

    
    let d = new Date();
    
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    
    let hoje = new Date(year, month, day, 0, 0).getTime();
    let pd = (new Date(year, month, day, 0, 0).getTime() + (86400000*90))

    return(
        <>
            {todos.map((e)=>{
                if(e.timeMill >= hoje && e.timeMill <= pd){

                    let data = e.date.split('-');

                    return <Activity check={e.checked} 
                    onClick={()=>{
                        dispatch(chekedTodo(e.id))
                    }
                    } key={e.id} >
                        {(e.date || e.hour) &&
                            <div className="data-hour-todo">
                                <div>{e.date != '' ? `${data[2]}-${data[1]}-${data[0]}` : ''}</div>
                                <div>{e.hour}</div>
                            </div>
                        }
                        <div className="title-todo"><p>{e.title}</p></div>
                        <FaTrash onClick={()=>{
                            let id = e.id;
                            dispatch(removeTodo(id));
                        }}/>
                    </Activity>
                }
                
            })}
        </>
    )
}