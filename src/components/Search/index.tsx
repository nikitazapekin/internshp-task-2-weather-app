import React from "react";
import { useEffect, useRef, useState } from "react";
import Button from "@components/Button";
//import WeatherService from "@api/weatherService";
import { UI_CONSTANTS } from "@constants/UI";
import { DEBOUNCE_DELAY } from "@constants/utilsConstants";

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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const handleSearchCity = (): void => {
    setShowSuggestions(false);
  };

  const fetchCities = async (query: string) => {
    if (query.length < 1) {
      setSuggestions([]);

      return;
    }

    /*   try {
  
    } catch {
      setSuggestions([]);
    } */
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      void fetchCities(inputValue);
    }, DEBOUNCE_DELAY);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string): void => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <Wrapper>
      <SearchInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={UI_CONSTANTS.placeholder}
      />
      <SuggestionsWrapper>
        {showSuggestions && suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map((suggestion, index) => (
              <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
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
