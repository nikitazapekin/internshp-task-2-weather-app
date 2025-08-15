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

import { $api } from ".";

interface CacheItem {
  timestamp: number;
  data: unknown;
}

const CACHE_TTL = 5 * 60 * 1000;
const CACHE_PREFIX = "weather_cache_";

export default class WeatherService {
  private static getCacheKey(url: string, params: URLSearchParams): string {
    return `${CACHE_PREFIX}${url}?${params.toString()}`;
  }

  private static getFromCache(key: string): unknown | null {
    try {
      const cached = localStorage.getItem(key);

      if (!cached) return null;

      const item: CacheItem = JSON.parse(cached);
      const isExpired = Date.now() - item.timestamp >= CACHE_TTL;

      if (isExpired) {
        localStorage.removeItem(key);

        return null;
      }

      return item.data;
    } catch {
      return null;
    }
  }

  private static setToCache(key: string, data: unknown): void {
    try {
      const item: CacheItem = {
        timestamp: Date.now(),
        data,
      };

      localStorage.setItem(key, JSON.stringify(item));
    } catch {
      return null;
    }
  }

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

  static async getCurrentWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
    });
    const cacheKey = WeatherService.getCacheKey("/data/2.5/weather", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<CurrentWeatherResponse>;
    }

    const response = await $api.get<CurrentWeatherResponse>(
      `/data/2.5/weather?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }

  static async getCurrentWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<CurrentWeatherResponse>> {
    const queryParams = WeatherService.buildParams({
      q: params.city,
    });
    const cacheKey = WeatherService.getCacheKey("/data/2.5/weather", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<CurrentWeatherResponse>;
    }

    const response = await $api.get<CurrentWeatherResponse>(
      `/data/2.5/weather?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }

  static async getHourlyWeatherByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      cnt: NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
    });
    const cacheKey = WeatherService.getCacheKey("/data/2.5/forecast", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<FiveDayForecastResponse>;
    }

    const response = await $api.get<FiveDayForecastResponse>(
      `/data/2.5/forecast?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }

  static async getHourlyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const queryParams = WeatherService.buildParams({
      q: params.city,
      cnt: NUMBER_OF_3_HOUR_INTERVALS_PER_DAY,
    });
    const cacheKey = WeatherService.getCacheKey("/data/2.5/forecast", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<FiveDayForecastResponse>;
    }

    const response = await $api.get<FiveDayForecastResponse>(
      `/data/2.5/forecast?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
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
    const cacheKey = WeatherService.getCacheKey("/data/2.5/forecast", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<FiveDayForecastResponse>;
    }

    const response = await $api.get<FiveDayForecastResponse>(
      `/data/2.5/forecast?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }

  static async getWeeklyWeatherByCity(
    params: CityParams
  ): Promise<AxiosResponse<FiveDayForecastResponse>> {
    const geoParams = WeatherService.buildParams({
      q: params.city,
      limit: SINGLE_GEOCODING_RESULT_LIMIT,
    });
    const geoCacheKey = WeatherService.getCacheKey("/geo/1.0/direct", geoParams);
    let geoResponse;

    const cachedGeoData = WeatherService.getFromCache(geoCacheKey);

    if (cachedGeoData) {
      geoResponse = { data: cachedGeoData };
    } else {
      geoResponse = await $api.get(`/geo/1.0/direct?${geoParams.toString()}`);
      WeatherService.setToCache(geoCacheKey, geoResponse.data);
    }

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
    const cacheKey = WeatherService.getCacheKey("/geo/1.0/direct", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<OpenWeatherGeoResponse>;
    }

    const response = await $api.get<OpenWeatherGeoResponse>(
      `/geo/1.0/direct?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }

  static async getCityNameByCoordinats(
    params: CurrentCoordinatsState
  ): Promise<AxiosResponse<OpenWeatherGeoResponse>> {
    const queryParams = WeatherService.buildParams({
      lat: params.latitude,
      lon: params.longitude,
      limit: SINGLE_GEOCODING_RESULT_LIMIT,
    });
    const cacheKey = WeatherService.getCacheKey("/geo/1.0/reverse", queryParams);
    const cachedData = WeatherService.getFromCache(cacheKey);

    if (cachedData) {
      return { data: cachedData } as AxiosResponse<OpenWeatherGeoResponse>;
    }

    const response = await $api.get<OpenWeatherGeoResponse>(
      `/geo/1.0/reverse?${queryParams.toString()}`
    );

    WeatherService.setToCache(cacheKey, response.data);

    return response;
  }
}
