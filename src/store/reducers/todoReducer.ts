import { createReducer } from "@reduxjs/toolkit";
import { fetchTodoFailure, fetchTodoRequest, fetchTodoSuccess } from "@store/selectors/todoActions";

interface TodoState {
  loading: boolean;
  error: string | null;
  title: string | null;
}

const initialState: TodoState = {
  loading: false,
  error: null,
  title: null,
};

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodoRequest, (state) => {
      console.log(2, state.title);
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTodoSuccess, (state, action) => {
      state.loading = false;
      state.title = action.payload.title;
    })
    .addCase(fetchTodoFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
