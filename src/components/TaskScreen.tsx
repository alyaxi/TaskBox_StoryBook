import React from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { TaskTypes } from './Task';

export default function TaskScreen() {
    const state = useSelector((state: TaskTypes) => state)
    console.log(state);
    
    return (
        <div>
            
        </div>
    )
}
