import { useSelector } from "react-redux"
import { Task } from "./Task";
export const TodoList = ()=>{

    const todoList = useSelector(state=>state.todoList);
   
    return (
        <>
        <div>
            {
                todoList?.map(task=><Task key={task.id} task={task} />)
            
            }
        </div>
        </>
    )
}