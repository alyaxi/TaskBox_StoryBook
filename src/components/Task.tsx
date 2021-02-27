import React from 'react';
import { useDispatch } from 'react-redux';
import {archiveTask} from "../reducer/TaskReducer"
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
             <input type="checkbox" defaultChecked={state === "TASK_ARCHIVED"} disabled={true} name="checked" />
             <span className="checkbox-custom" onClick={() => dispatch(archiveTask(id))}/>
         </label>
        <div className="title">
            <input type="check" value={title} readOnly={true} placeholder={"Input task"}/>
        </div>

     </div>
 )   
}

export default Task

