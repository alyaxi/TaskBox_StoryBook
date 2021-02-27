import React from 'react';
import { useSelector } from 'react-redux';
import { TaskTypes } from './Task';
import TaskList from './TaskList';

export default function TaskScreen({error}: any) {
    const state = useSelector((state: TaskTypes[]) => (state))
    console.log(state);
    if(error){

        return (
            <div className="page lists-show">
            <div className="wrapper-message">
                <span className = "icon-face-sad">
                    <div className="title-message">Oh No!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </span>
            </div>
        </div>
        )
    }
    
    return (
        <div className="page lists-show">
            <nav>
            <h1 className = "title-page">
                    <span className = "title-wrapper">TASK BOX</span>
                </h1>
            </nav>
            <TaskList tasks={state} loading={false}/>
        </div>
    )
}
