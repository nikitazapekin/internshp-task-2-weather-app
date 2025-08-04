import type { AxiosResponse } from "axios";
import axios from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoRequest, fetchTodoSuccess } from "../actions/todoActions";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function* fetchTodo(): SagaIterator {
  try {
    const response: AxiosResponse<TodoResponse> = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    yield put(fetchTodoSuccess({ title: response.data.title }));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    yield put(fetchTodoFailure(message));
  }
}

export function* todoSaga(): SagaIterator {
  yield takeLatest(fetchTodoRequest.type, fetchTodo);
}
