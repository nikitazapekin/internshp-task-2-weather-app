import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import type { AxiosResponse } from "axios";

import { $api2 } from ".";

export default class GoogleCalendarService {
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
