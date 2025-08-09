import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import type { AxiosResponse } from "axios";

import { $api2 } from ".";

export default class GoogleCalendarService {
  /*  static async fetchEvents(accessToken: string): Promise<AxiosResponse<CalendarEvent[]>> {
    return $api2.get<CalendarEvent[]>(
      `/calendar/v3/calendars/primary/events`,
      {
        params: {
          maxResults: 10,
          orderBy: "startTime",
          singleEvents: true,
          timeMin: new Date().toISOString(),
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } */

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
/* import type { WeatherResponseType } from "@interfaces/weatherResponseType";
import type { AxiosResponse } from "axios";
import { $api } from ".";

export default class GoogleCalendarService {
  static async login(): Promise<AxiosResponse<WeatherResponseType>> {
    return $api.get<WeatherResponseType>(` `);
  }
  static async logout(): Promise<AxiosResponse<WeatherResponseType>> {
    return $api.get<WeatherResponseType>(` `);
  } 
  static async getTodayEvents(): Promise<AxiosResponse<WeatherResponseType>> {
    return $api.get<WeatherResponseType>(` `);
  } 
}
 */
