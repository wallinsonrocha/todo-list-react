import { createSlice } from "@reduxjs/toolkit";

export const listReducer = createSlice({
    //Início. Base do reducer
    name:'list',
    initialState:{
        todoList: [],
    },
    //Parâmetros
    reducers:{
        //Adicionar atividade
        addTodo: (state, action) => {
            let dataMil = action.payload.date.split('-');
            let horaMil = action.payload.hour.split(':')
            
            let timeMill = new Date(dataMil[0], (dataMil[1]-1), dataMil[2], horaMil[0], horaMil[1]).getTime();
            
            let newAtv = {
                title: action.payload.title,
                date: action.payload.date,
                hour: action.payload.hour,
                id: state.todoList.length,
                checked: false,
                timeMill: timeMill
            }

            //Análise da data do objeto
            let data = newAtv.timeMill;

            //Percorrer todoList para comparar as datas do objeto
            //e definir a sua posição
            let dataStart;
            let dataEnd;

            if(state.todoList.length != 0){
                dataStart = state.todoList[0].timeMill;
                dataEnd = state.todoList[(state.todoList.length -1)].timeMill;
            }

            //A modificação que será feita é:
            //1- Sbustituir o resultado das variáveis dataCompare pelos millissegundos ao invés das datas
            if(state.todoList.length > 1){
                for(let i= 0; i < (state.todoList.length -1); i++){
                    let dataCompare1 = state.todoList[i].timeMill;
                    let dataCompare2 = state.todoList[(i+1)].timeMill;
                    //Entre datas
                    if(dataCompare1 <= newAtv.timeMill && dataCompare2 >= newAtv.timeMill){    
                        state.todoList.splice((i+1), 0, newAtv)
                        break;
                    }
                    //Início das datas
                    if(dataStart >= newAtv.timeMill){
                        state.todoList.splice(0, 0, newAtv);
                        break;
                    }
                    //Data final
                    if(dataEnd <= newAtv.timeMill){
                        state.todoList.push(newAtv);                                
                        break;
                    }
                }
            } else{
                //Caso o tamanho do array não seja suficiente para analizar
                if(state.todoList.length != 0){
                    //Início das datas
                    if(dataStart >= newAtv.timeMill){
                        state.todoList.splice(0, 0, newAtv);
                    }
                    //Data final
                    else if(dataEnd <= newAtv.timeMill){
                        state.todoList.push(newAtv);
                    }
                }else{
                    state.todoList.push(newAtv);                
                }
            }
        },
        //Remover atividade
        removeTodo:(state, action) => {
          let filter = state.todoList.filter(e => e.id !== action.payload);
          state.todoList = filter;
        },
        //Marcar/desmarcar atividade
        chekedTodo: (state, action) => {
            let id = action.payload;
            for(let i = 0; i < state.todoList.length; i++){
                if(state.todoList[i].id == id){
                    state.todoList[i].checked = !state.todoList[i].checked;
                }
            }
        }
    }
})

export const {addTodo, removeTodo, chekedTodo} = listReducer.actions;
export default listReducer.reducer;