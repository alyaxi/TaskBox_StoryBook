import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {add} from "../reducer/TaskReducer";

const InputTask = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(input === " "){
            dispatch(add({input: "Required Field"}))
        }else {
            dispatch(add({input}))
            setInput("")
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}}/>
            <button onClick={handleSubmit}> ADD TASK</button>
        </div>
    )
}
export default InputTask