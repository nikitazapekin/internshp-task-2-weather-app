import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { DEBOUNCE_DELAY } from "@constants/utilsConstants";
import type { CitySearchResult } from "@types/CitySearchResponseTypes";

import { fetchCitiesRequest, fetchClearCitiesRequest } from "@store/actions/elasticSearch";
import { selectCitiesSuggestions } from "@store/selectors";

import {
  SearchInput,
  SuggestionItem,
  SuggestionsList,
  SuggestionsWrapper,
  Wrapper,
} from "./styled";

const SearchCitiesComponent = () => {
  const { searchButton } = UI_CONSTANTS.buttons;

  const [inputValue, setInputValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const dispatch = useDispatch();

  const suggestedCities = useSelector(selectCitiesSuggestions) as CitySearchResult[];

  const handleSearchCity = (): void => {
    setShowSuggestions(false);
  };

  const fetchCities = (query: string) => {
    if (query.length < 1) {
      dispatch(fetchClearCitiesRequest());

      return;
    }

    dispatch(fetchCitiesRequest({ city: query }));
  };

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
  }, [inputValue, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city: CitySearchResult): void => {
    const cityName = `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;

    setInputValue(cityName);
    setShowSuggestions(false);
  };

  const formatCityName = (city: CitySearchResult) => {
    return `${city.name}${city.state ? `, ${city.state}` : ""}, ${city.country}`;
  };

  console.log(suggestedCities);

  return (
    <Wrapper>
      <SearchInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={UI_CONSTANTS.placeholder}
      />
      <SuggestionsWrapper>
        {showSuggestions && suggestedCities && suggestedCities.length > 0 && (
          <SuggestionsList>
            {suggestedCities.map((city, index) => (
              <SuggestionItem
                key={`${city.lat}-${city.lon}-${index}`}
                onClick={() => handleSuggestionClick(city)}
              >
                {formatCityName(city)}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SuggestionsWrapper>
      <Button text={searchButton} handler={handleSearchCity} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
