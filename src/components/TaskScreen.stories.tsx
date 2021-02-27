import React from 'react';
import TaskScreen from './TaskScreen';
import {Provider} from "react-redux"
import {action} from "@storybook/addon-actions";
import * as TaskListStories from "./TaskList.stories"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title:"Task Screen",
    component: TaskScreen,
    decorators : [(story: () => React.ReactNode) => <Provider store = {store} >{story()}</Provider>],
}

const store: any = {
    getState: () => {
        return {
            task: TaskListStories.Default.args?.tasks
        }
    },
    subscribe: () => 0,
    dispatch: action("dispatch")
}
const Template = (args: any) => <TaskScreen {...args}/>;

export const Default = Template.bind({})