import type { WeatherResponseType } from "@interfaces/WeatherResponseType";
import type { AxiosResponse } from "axios";

import $api from ".";

export default class WeatherService {
  static async getWeatherForWeek(): Promise<AxiosResponse<WeatherResponseType>> {
    return $api.get<WeatherResponseType>(`/todos`);
  }
}
