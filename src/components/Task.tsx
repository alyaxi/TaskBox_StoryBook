import React from 'react';
import { useDispatch } from 'react-redux';
import {archiveTask, pinnedTask} from "../reducer/TaskReducer"
import "../index.css"

export interface TaskTypes {
    id?: string
    state?: string
    title?: string
}
export interface TaskProps {
    task: TaskTypes
}

const Task: React.FC<TaskProps> = ({task: {id, title, state}}) => {

    const dispatch = useDispatch()

    console.log(state);
 return (
     <div className={`list-item ${state}`}>
         <label className="checkbox">
             <input type="checkbox" className="checkbox-line" disabled={true} defaultChecked={state === "TASK_ARCHIVED"}  name="checked" />
             <span className ="checkbox-custom" onClick={() => dispatch(archiveTask(id))}/>
         </label>
        <div className="title">
            <input type="text" value={title} className={`${state === "TASK_ARCHIVED" ? "checkbox-line": null}`} readOnly={true} placeholder={"Input Task"}/>
        </div>
        <div className="actions" onClick={(e) => {e.stopPropagation()}}>
            {state !== "TASK_ARCHIVED" ? (
                <a href="/" onClick={() => dispatch(pinnedTask(id))}>
                 <span onClick={(e) => {e.preventDefault()}} className={`icon-star`}></span>
                </a>
            ): null}
        </div>


     </div>
 )   
}

export default Task

