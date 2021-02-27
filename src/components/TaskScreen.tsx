import React from 'react';
import { useSelector } from 'react-redux';
import { TaskTypes } from './Task';
import TaskList from './TaskList';

export default function TaskScreen() {
    const state = useSelector((state: TaskTypes[]) => (state))
    console.log(state);
    
    return (
        <div>
            <TaskList tasks={state} loading={false}/>
        </div>
    )
}
