import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOOGLE_STATUS } from "./actionTypes"

export const addTODO = (task)=>{
    return {
        type:ADD_TODO,
        task
    }
}

export const editTodo = (task)=>{
    return {
        type:EDIT_TODO,
        description:"Update a task in todolist",
        task
    }
}

export const deleteTodo = (id)=>{
    return {
        type:REMOVE_TODO,
        id
    }
}

export const toogleTodo = (id)=>{
    return {
        type:TOOGLE_STATUS,
        id
    }
}