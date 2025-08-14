import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEBOUNCE_DELAY } from "@constants/utilsConstants";
import type { CityCoordinats } from "@types/cityCoordinats";
import type { CitySearchResult } from "@types/CitySearchResponseTypes";

import { fetchCitiesRequest, fetchClearCitiesRequest } from "@store/actions/elasticSearch";
import { selectCitiesSuggestions } from "@store/selectors";

export const useElastic = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [cityCoordinats, setCityCoordinats] = useState<CityCoordinats>({
    latitude: null,
    longitude: null,
  });
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const dispatch = useDispatch();

  const suggestedCities = useSelector(selectCitiesSuggestions) as CitySearchResult[];

  const fetchCities = useCallback(
    (query: string): void => {
      if (query.length < 1) {
        dispatch(fetchClearCitiesRequest());

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

  const handleInputChange = useCallback((value: string): void => {
    setInputValue(value);
    setShowSuggestions(true);
  }, []);

  const handleSuggestionClick = useCallback((city: CitySearchResult): string => {
    const cityName = `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;

    setInputValue(cityName);
    setShowSuggestions(false);
    setCityCoordinats({ latitude: city.lat, longitude: city.lon });

    return cityName;
  }, []);

  const formatCityName = useCallback((city: CitySearchResult): string => {
    return `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;
  }, []);

  return {
    inputValue,
    showSuggestions,
    suggestedCities,
    setShowSuggestions,
    handleInputChange,
    handleSuggestionClick,
    formatCityName,
    cityCoordinats,
  };
};
