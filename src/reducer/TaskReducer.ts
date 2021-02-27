import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import "../index.css"
import {TaskTypes} from "../components/Task";

const initialState: TaskTypes[] = [
    {id: "1", title: "Syed Ali", state: "TASK_INBOX"},
    {id: "2", title: "Syed Arif", state: "TASK_INBOX"},
    {id: "3", title: "Syed Kashif", state: "TASK_INBOX"},
    {id: "4", title: "Syed Tariq", state: "TASK_INBOX"},
]

const reducer = createSlice({
    name: "taskkbox",
    initialState: initialState,

    reducers: {
        archiveTask: (state, action: PayloadAction<any>) => {
            return state.map((task) => (
                task.id === action.payload ? {
                    ...task,
                    state: "TASK_ARCHIVED"
                }: task
            ))
        },
        pinnedTask: ( state , action: PayloadAction<any>) => {
            return state.map((task) => task.id === action.payload ? {
                ...task,
                state: "TASK_PINNED"
            }: task)
        },
        add: (state , action: PayloadAction<any>) => {
           let id = Math.random().toString()
           return [
               ...state,
               {id: id, title: action.payload.input, state: "TASK_INBOX"}
           ]
        }
    }
})

export const store = configureStore({
    reducer: reducer.reducer
})

export const {archiveTask, add, pinnedTask } = reducer.actions;

export {reducer}