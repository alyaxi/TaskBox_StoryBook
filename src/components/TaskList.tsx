import React from 'react';
import Task, {TaskTypes} from "./Task"

import PropTypes from "prop-types";

export interface TaskListProps {
    tasks: TaskTypes[],
    loading: boolean
    onPinned? : any
    onArchived?: any
}

const TaskList: React.FC<TaskListProps> = ({tasks, onArchived, onPinned, loading}) => {
    const event = {
        onArchived,
        onPinned,
    }
    const loadingRow = (
        <div className="loading-item">
        <span className = "glow-checkbox"/>
        <span className = "glow-text" >
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
        </span>
    </div>
    )
    
    if (loading) {
        return (
            <div className = "list-items">
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
            </div>
        )
    }
    if (tasks?.length === 0 ){
        return <div>
               <div className = "list-items">
                <div className="wrapper-message">
                    <span className = "icon-check" />
                    <div className = "title-message" >You have no task</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        </div>
    }
    const TasksInOrder = [
        ...tasks.filter(t =>t.state === "TASK_PINNED" ),

        ...tasks.filter(t => t.state !== "TASK_PINNED"),
        
    ]
    return (
        <div className = "list-items">
            {TasksInOrder.map((task, id) => (
                <div key={id}>
                <Task key={id} task={task} {...event}/>
                </div>
            ))}
        </div>
    )

}

export default TaskList

TaskList.propTypes = {
    /** Checks if it's in loading state */
    // loading: PropTypes.bool,
    /** The list of tasks */
    // tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    /** Event to change the task to pinned */
    onPinned: PropTypes.func,
    /** Event to change the task to archived */
    onArchived: PropTypes.func,
  };
  TaskList.defaultProps = {
    loading: false,
  };