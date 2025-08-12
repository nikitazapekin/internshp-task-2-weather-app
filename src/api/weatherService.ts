import { ENV_CONSTANTS } from "@constants/envConstants";
import type { CityParams, CurrentWeatherResponse, FiveDayForecastResponse } from "@types/apiTypes";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";
import type { AxiosResponse } from "axios";

import { $api } from ".";

export default class WeatherService {
  private static buildParams(params: Record<string, string | number>): URLSearchParams {
    const searchParams = new URLSearchParams({
      ...params,
      appid: ENV_CONSTANTS.OPEN_WEATHER_TOKEN,
      units: "metric",
      lang: "ru",
    });

    return searchParams;
  }

  static async getCurrentWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
    });

    return $api.get<CurrentWeatherResponse>(`/data/2.5/weather?${queryParams.toString()}`);
  }

  static async getCurrentWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      q: params.city,
    });

    return $api.get<CurrentWeatherResponse>(`/data/2.5/weather?${queryParams.toString()}`);
  }

  static async getHourlyWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      cnt: "8",
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getHourlyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      q: params.city,
      cnt: "8",
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getWeeklyWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      exclude: "minutely,hourly",
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getWeeklyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const geoParams = WeatherService.buildParams({
      q: params.city,
      limit: 1,
    });
    const geoResponse = await $api.get(`/data/2.5/forecast?${geoParams.toString()}`);
    const { lat, lon } = geoResponse.data[0];

    return WeatherService.getWeeklyWeatherByCoordinats({ latitude: lat, longitude: lon });
  }
}
