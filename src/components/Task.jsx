import { useDispatch } from "react-redux";
import { editTodo, deleteTodo, toogleTodo } from "../redux/action";
import { useState } from "react";
export const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [edit,setEdit] = useState(false);
    const [title,setTitle] = useState(task.title)

    const handleEdit = () => {
        setEdit(true);
    }
    const handleToggle = () => {
        const action = toogleTodo(task.id)
        dispatch(action);
    }
    const handleDelete = () => {
        const action = deleteTodo(task.id);
        dispatch(action);
    }
    const handleSave = ()=>{
        setEdit(false);
        task.title = title;
        const action = editTodo(task);
        dispatch(action);
    }
    return (
        <>
            <div>

                {
                    edit ? <h3><input type="text" value={title} onChange={e=>setTitle(e.target.value)}  /><button onClick={handleSave}>SAVE</button></h3> : <h3>{task.title}</h3>
                }
                {task.status ? <p>Completed</p> : <p>Pending</p>}
                <div>
                    <button onClick={handleEdit}>EDIT</button>
                    <button onClick={handleDelete}>DELETE</button>
                    <button onClick={handleToggle}>TOOGLE</button>
                </div>
            </div>
        </>
    )

}