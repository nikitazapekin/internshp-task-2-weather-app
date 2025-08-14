import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEBOUNCE_DELAY } from "@constants/utilsConstants";
import type { CitySearchResult } from "@types/CitySearchResponseTypes";

import { fetchCurrentCityRequest } from "@store/actions/currentCity";
import { fetchWeatherByCoordsRequest } from "@store/actions/currentWeather";
import {
  fetchCitiesActive,
  fetchCitiesRequest,
  fetchClearCitiesRequest,
  fetchSuggestedCityCoordinats,
} from "@store/actions/elasticSearch";
import { fetchWeeklyWeatherByCoordsRequest } from "@store/actions/weather";
import { selectCitiesSuggestions, selectCitiesSuggestionsCoordinats } from "@store/selectors";

export const useElastic = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const dispatch = useDispatch();
  const cityCoordinats = useSelector(selectCitiesSuggestionsCoordinats);

  const suggestedCities = useSelector(selectCitiesSuggestions) as CitySearchResult[];

  const fetchCities = useCallback(
    (query: string): void => {
      if (query.length < 1) {
        dispatch(fetchClearCitiesRequest());
        dispatch(fetchCitiesActive(false));

        return;
      }

      dispatch(fetchCitiesRequest({ city: query }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      fetchCities(inputValue);
    }, DEBOUNCE_DELAY);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputValue, fetchCities]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  }, []);

  const handleSuggestionClick = useCallback(
    (city: CitySearchResult) => () => {
      const cityName = `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;

      setInputValue(cityName);
      setShowSuggestions(false);
      dispatch(fetchSuggestedCityCoordinats({ latitude: city.lat, longitude: city.lon }));

      return cityName;
    },
    [dispatch]
  );

  const formatCityName = useCallback((city: CitySearchResult): string => {
    return `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;
  }, []);

  const handleSearchCity = useCallback((): void => {
    dispatch(fetchWeeklyWeatherByCoordsRequest(cityCoordinats));
    dispatch(fetchCitiesActive(true));
    dispatch(
      fetchWeatherByCoordsRequest({
        latitude: cityCoordinats.latitude,
        longitude: cityCoordinats.longitude,
      })
    );
    dispatch(
      fetchCurrentCityRequest({
        latitude: cityCoordinats.latitude,
        longitude: cityCoordinats.longitude,
      })
    );
    setShowSuggestions(false);
  }, [cityCoordinats, dispatch]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        handleSearchCity();
      }
    },
    [handleSearchCity]
  );

  return {
    inputValue,
    showSuggestions,
    suggestedCities,
    setShowSuggestions,
    setInputValue,
    handleInputChange,
    handleSuggestionClick,
    formatCityName,
    cityCoordinats,
    handleSearchCity,
    handleKeyDown,
  };
};
