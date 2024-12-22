import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./features/TaskReducer";

export const store = configureStore({
  reducer: {
    tasks: TaskReducer
  },
});
