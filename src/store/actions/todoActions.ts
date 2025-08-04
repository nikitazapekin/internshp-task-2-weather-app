import { createAction } from "@reduxjs/toolkit";

export const fetchTodoRequest = createAction("todo/fetchRequest");
export const fetchTodoSuccess = createAction<{ title: string }>("todo/fetchSuccess");
export const fetchTodoFailure = createAction<string>("todo/fetchFailure");
