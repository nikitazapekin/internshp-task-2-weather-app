import { ENV_CONSTANTS } from "@constants/envConstants";
import {
  NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
  SINGLE_GEOCODING_RESULT_LIMIT,
} from "@constants/numericalConstants";
import { API_CONFIG } from "@constants/utilsConstants";
import type { CityParams, CurrentWeatherResponse, FiveDayForecastResponse } from "@types/apiTypes";
import type { OpenWeatherGeoResponse } from "@types/CitySearchResponseTypes";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";
import type { AxiosResponse } from "axios";

import { setCacheItem } from "@store/actions/cache";
import { store } from "@store/index";

import { $api } from ".";

const CACHE_TTL = 5 * 60 * 1000;

export default class WeatherService {
  private static buildParams(params: Record<string, string | number>): URLSearchParams {
    const { METRIC, LANG } = API_CONFIG.PARAMS;
    const searchParams = new URLSearchParams({
      ...params,
      appid: ENV_CONSTANTS.OPEN_WEATHER_TOKEN,
      units: METRIC,
      lang: LANG,
    });

    return searchParams;
  }

  private static async cachedRequest<T>(
    key: string,
    requestFn: () => Promise<AxiosResponse<T>>
  ): Promise<AxiosResponse<T>> {
    const cacheState = store.getState().cache;
    const cachedItem = cacheState[key];
    const now = Date.now();

    if (cachedItem && now - cachedItem.timestamp < CACHE_TTL) {
      return {
        ...cachedItem.data,
        config: { ...cachedItem.data.config, cached: true },
      } as AxiosResponse<T>;
    }

    const response = await requestFn();

    console.log("cached");
    store.dispatch(
      setCacheItem({
        key,
        data: response,
      })
    );

    return response;
  }

  static async getCurrentWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
    });
    const cacheKey = `weather:${params.latitude}:${params.longitude}`;

    return this.cachedRequest(cacheKey, () =>
      $api.get<CurrentWeatherResponse>(`/data/2.5/weather?${queryParams.toString()}`)
    );
  }

  /* 
static async getCurrentWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
    });

    return $api.get<CurrentWeatherResponse>(`/data/2.5/weather?${queryParams.toString()}`);
  } */

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
    const { EXCLUDE } = API_CONFIG.PARAMS;
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      exclude: EXCLUDE,
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

    return WeatherService.getWeeklyWeatherByCoordinats({
      latitude: lat,
      longitude: lon,
      isGeolocationDenied: false,
    });
  }

  static async getCitiesByQuery(
    params: CityParams
  ): Promise<AxiosResponse<OpenWeatherGeoResponse>> {
    const { LIMIT_OF_CITIES_FOR_SUGGESTION } = API_CONFIG.PARAMS;
    const queryParams = WeatherService.buildParams({
      q: params.city,
      limit: LIMIT_OF_CITIES_FOR_SUGGESTION,
    });

    return $api.get<OpenWeatherGeoResponse>(`/geo/1.0/direct?${queryParams.toString()}`);
  }

  static async getCityNameByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<OpenWeatherGeoResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      limit: SINGLE_GEOCODING_RESULT_LIMIT,
    });

    return $api.get<OpenWeatherGeoResponse>(`/geo/1.0/reverse?${queryParams.toString()}`);
  }
}
