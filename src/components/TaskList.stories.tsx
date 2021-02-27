import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import TaskList, { TaskListProps } from './TaskList';
import * as TaskStories from "./Task.stories"

export default {
    title: "TaskList",
    component: TaskList,
    decorators : [(story: () => React.ReactNode) => <div style = {{padding : "3rem"}}>{story()}</div>]

}

const Template: Story<TaskListProps> = (args) => <TaskList {...args}/>

export const Default = Template.bind({})

Default.args = {
    tasks: [
        {...TaskStories.Default.args?.task, id: "1", title: "Task Box 1", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "2", title: "Task Box 2", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "3", title: "Task Box 3", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "4", title: "Task Box 4", state: "TASK_INBOX"},
    ]
}

export const withPinned = Template.bind({})

withPinned.args = {
    tasks : [
        {...TaskStories.Default.args?.task, id: "1", title: "Task Box 1", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "2", title: "Task Box 2", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "3", title: "Task Box 3", state: "TASK_INBOX"},
        {...TaskStories.Default.args?.task, id: "4", title: "Task Box 4", state: "TASK_PINNED"},
    ]
}

export const Loading = Template.bind({})
 Loading.args = {
     tasks: [],
     loading: true
 }

 export const Empty = Template.bind({})
 Empty.args = {
     tasks: [],
     loading: false
 }