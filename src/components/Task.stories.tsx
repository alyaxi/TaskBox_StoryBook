import React from 'react';
import Task from "./Task";
import {TaskProps} from "./Task";
import { Story } from '@storybook/react/types-6-0';


export default {

    title: "Task",
    component : Task,

}

const Template: Story<TaskProps> = (args) => <Task {...args}/> 

export const Default = Template.bind({});

Default.args = {
    task : {
        id: "1",
        title: "Task Test",
        state: "TASK_INBOX"

    }
    
}

export const Pinned = Template.bind({})

Pinned.args = {
    task: {
        ...Default.args.task,
        state: "TASK_PINNED"
    }
}

export const Archived = Template.bind({})

Archived.args = {
    task: {
        ...Default.args.task,
        state: "TASK_ARCHIVED"
    }
}