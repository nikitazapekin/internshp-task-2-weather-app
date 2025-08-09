import GoogleCalendarService from "@api/googleCalendarService";
import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import {
  fetchCalendarEventsFailure,
  fetchCalendarEventsRequest,
  fetchCalendarEventsSuccess,
} from "@store/actions/googleCalendarActions";
import type { AxiosResponse } from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

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
/* import WeatherService from "@api/weatherService";
import GoogleCalendarService from "@api/googleCalendarService";
import type { WeatherResponseType } from "@interfaces/weatherResponseType";
import {
  fetchCalendarEventsFailure,
  fetchCalendarEventsRequest,
  fetchCalendarEventsSuccess,
} from "@store/actions/googleCalendarActions";
import type { AxiosResponse } from "axios";
import type { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { CalendarEvent } from "@interfaces/googleCalendarTypes";

function* fetchCalendarEvents(): SagaIterator {
  try {
    const response: <AxiosResponse<{ items: CalendarEvent[] }>> = yield call(
    //  WeatherService.getWeatherForWeek
    GoogleCalendarService.fetchEvents("")
    );

    yield put(fetchCalendarEventsSuccess({ title: response.data.title }));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    yield put(fetchCalendarEventsFailure(message));
  }
}

export function* CalendarEventsSaga(): SagaIterator {
  yield takeLatest(fetchCalendarEventsRequest.type, fetchCalendarEvents);
}
 */
/*

  static async fetchEvents(
    accessToken: string
  ): Promise<AxiosResponse<{ items: CalendarEvent[] }>> {
    const timeMin = new Date().toISOString();

    return $api2.get(`/calendars/primary/events`, {
      params: {
        maxResults: 10,
        orderBy: "startTime",
        singleEvents: true,
        timeMin,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
  */
