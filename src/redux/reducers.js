import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOOGLE_STATUS } from "./actionTypes"
import { addTODO, deleteTodo,editTodo,toogleTodo} from "./action"


const initialState = {
    todoList:[]
}

export const todoReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TODO:
            return {...state,
                    todoList:[...state.todoList,action.task]
            }
        
            case EDIT_TODO:
                return {
                    ...state,
                    todoList:state.todoList.map(ele=>{
                        if(ele.id == action.task.id) return action.task;
                        else return ele;
                        
                    })
                }

            case TOOGLE_STATUS:
                return {
                    ...state,
                    todoList:state.todoList.map(ele=>{
                        if(ele.id == action.id){
                            ele.status = !ele.status
                        }
                        
                        return ele
                    })
                }
            
                case REMOVE_TODO:
                    return {
                        ...state,
                        todoList:state.todoList.filter(ele=>{
                            if(ele.id != action.id) return ele;
                        })
                    }
                default:
                    return state;
    }
}