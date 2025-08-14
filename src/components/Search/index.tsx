import React from "react";
import { useDispatch } from "react-redux";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { useElastic } from "@hooks/useElastic";

import { fetchWeeklyWeatherByCoordsRequest } from "@store/actions/weather";

import {
  SearchInput,
  SuggestionItem,
  SuggestionsList,
  SuggestionsWrapper,
  Wrapper,
} from "./styled";

const SearchCitiesComponent = () => {
  const { searchButton } = UI_CONSTANTS.buttons;

  const {
    inputValue,
    showSuggestions,
    suggestedCities,
    setShowSuggestions,
    handleInputChange,
    handleSuggestionClick,
    formatCityName,
    cityCoordinats,
  } = useElastic();

  const dispatch = useDispatch();
  const handleSearchCity = (): void => {
    dispatch(fetchWeeklyWeatherByCoordsRequest(cityCoordinats));
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearchCity();
    }
  };

  return (
    <Wrapper>
      <SearchInput
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={UI_CONSTANTS.placeholder}
      />
      <SuggestionsWrapper>
        {showSuggestions && suggestedCities && suggestedCities.length > 0 && (
          <SuggestionsList>
            {suggestedCities.map((city, index) => (
              <SuggestionItem
                key={`${city.name}-${index}`}
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
