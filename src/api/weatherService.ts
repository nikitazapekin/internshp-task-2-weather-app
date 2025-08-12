import type { AxiosResponse } from "axios";
import type { WeatherResponseType } from "src/types/weatherResponseType";

import { $api } from ".";

export default class WeatherService {
  static async getWeatherForWeek(): Promise<AxiosResponse<WeatherResponseType>> {
    return $api.get<WeatherResponseType>(`/todos`);
  }
}
