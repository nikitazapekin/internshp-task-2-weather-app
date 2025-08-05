import type { AxiosResponse } from "axios";

import $api from ".";

interface WeatherResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default class WeatherService {
  static async getWeatherForWeek(): Promise<AxiosResponse<WeatherResponse>> {
    return $api.get<WeatherResponse>(`/todos`);
  }
}
