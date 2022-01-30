import { useState } from "react";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import{addTODO} from "../redux/action";

export const TodoInput = ({addTodo})=>{

    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleClick= () =>{
        let task = {
            title:text,
            status:false,
            id:nanoid(4)
        }

        const action = addTODO(task)
        dispatch(action);
        setText("")
    }

    return (
        <>  
        <div>
            <input type="text" placeholder="Type todo.." onChange={(e)=>setText(e.target.value)} value={text}/>
            <button onClick={handleClick}>ADD</button>
        </div>
        </>
    )
}