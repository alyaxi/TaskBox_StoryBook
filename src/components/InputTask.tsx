import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {add} from "../reducer/TaskReducer";

const InputTask = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(input === ""){
            alert("Required Input Field")
        }else {
            dispatch(add({input}))
            setInput("")
        }
    }

    return (
        <div className="new_task">

            
                    <TextField  style={{backgroundColor: "#c8d6e5", color:"white",padding:"5px"}}onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}} value={input} required id="standard-required" label="Input Task" />

           
            <Button variant="contained" color="primary" onClick={handleSubmit}> ADD TASK </Button>
        </div>
    )
}
export default InputTask