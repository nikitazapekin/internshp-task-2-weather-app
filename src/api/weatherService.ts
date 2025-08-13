import { ENV_CONSTANTS } from "@constants/envConstants";
import {
  NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
  SINGLE_GEOCODING_RESULT_LIMIT,
} from "@constants/numericalConstants";
import { API_LANG, API_METRIC, EXCLUDE_PARAMS } from "@constants/utilsConstants";
import type { CityParams, CurrentWeatherResponse, FiveDayForecastResponse } from "@types/apiTypes";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";
import type { AxiosResponse } from "axios";

import { $api } from ".";

export default class WeatherService {
  private static buildParams(params: Record<string, string | number>): URLSearchParams {
    const searchParams = new URLSearchParams({
      ...params,
      appid: ENV_CONSTANTS.OPEN_WEATHER_TOKEN,
      units: API_METRIC,
      lang: API_LANG,
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
      cnt: NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getHourlyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      q: params.city,
      cnt: NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getWeeklyWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      exclude: EXCLUDE_PARAMS,
    });

    return $api.get<FiveDayForecastResponse>(`/data/2.5/forecast?${queryParams.toString()}`);
  }

  static async getWeeklyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const geoParams = WeatherService.buildParams({
      q: params.city,
      limit: SINGLE_GEOCODING_RESULT_LIMIT,
    });
    const geoResponse = await $api.get(`/data/2.5/forecast?${geoParams.toString()}`);
    const { lat, lon } = geoResponse.data[0];

    return WeatherService.getWeeklyWeatherByCoordinats({ latitude: lat, longitude: lon });
  }
}
