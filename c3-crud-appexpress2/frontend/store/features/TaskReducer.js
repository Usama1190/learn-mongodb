import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: []
}

const TaskReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        getAllTasks: (state, {payload}) => {
            state.task = payload
        },
        addTask: (state, {payload}) => {
            state.task.push(payload)
        },
        deleteTask: (state, {payload}) => {
            state.task = state.task.filter(task => task.id !== payload);
        }
    }
})

export const  {addTask, deleteTask, getAllTasks} = TaskReducer.reducer;
export default TaskReducer.reducer;