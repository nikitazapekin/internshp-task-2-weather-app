import type { AxiosResponse } from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import GoogleCalendarService from "@api/googleCalendarService";
import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import {
  fetchCalendarEventsFailure,
  fetchCalendarEventsRequest,
  fetchCalendarEventsSuccess,
} from "@store/actions/googleCalendarActions";

function* fetchCalendarEvents(action: ReturnType<typeof fetchCalendarEventsRequest>): SagaIterator {
  try {
    const { accessToken } = action.payload;

    const response: AxiosResponse<{ items: CalendarEvent[] }> = yield call(
      GoogleCalendarService.fetchEvents,
      accessToken
    );

    console.log("resp", response);
    yield put(fetchCalendarEventsSuccess({ events: response.data.items }));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    yield put(fetchCalendarEventsFailure(message));
  }
}

export function* CalendarEventsSaga(): SagaIterator {
  yield takeLatest(fetchCalendarEventsRequest.type, fetchCalendarEvents);
}
