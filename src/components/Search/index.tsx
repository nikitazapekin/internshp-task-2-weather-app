import { useSelector } from "react-redux";
import Button from "@components/Button";
import Spinner from "@components/Spinner";
import { UI_CONSTANTS } from "@constants/UI";
import { useElastic } from "@hooks/useElastic";

import { selectCitiesSuggestionsLoading } from "@store/selectors";

import {
  NothingFoundText,
  SearchInput,
  SearchWrapper,
  SuggestionItem,
  SuggestionsContent,
  SuggestionsWrapper,
  Wrapper,
} from "./styled";

const SearchCitiesComponent = () => {
  const { searchButton } = UI_CONSTANTS.buttons;
  const { nothingFoundText } = UI_CONSTANTS;
  const isLoadingSuggestions = useSelector(selectCitiesSuggestionsLoading);
  const {
    inputValue,
    showSuggestions,
    suggestedCities,
    handleInputChange,
    handleSuggestionClick,
    formatCityName,
    handleSearchCity,
    handleKeyDown,
  } = useElastic();

  const renderSuggestions = () => {
    if (isLoadingSuggestions) {
      return (
        <SuggestionsContent height={100}>
          <Spinner position="relative" />
        </SuggestionsContent>
      );
    }

    if (showSuggestions && suggestedCities.length == 0 && inputValue.length > 0) {
      return (
        <SuggestionsContent height={100}>
          <NothingFoundText>
            {nothingFoundText} {inputValue}
          </NothingFoundText>
        </SuggestionsContent>
      );
    }

    if (showSuggestions && suggestedCities && suggestedCities.length > 0) {
      return (
        <SuggestionsContent>
          {suggestedCities.map((city, index) => (
            <SuggestionItem key={`${city.name}-${index}`} onClick={handleSuggestionClick(city)}>
              {formatCityName(city)}
            </SuggestionItem>
          ))}
        </SuggestionsContent>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={UI_CONSTANTS.placeholder}
        />
        <SuggestionsWrapper>{renderSuggestions()}</SuggestionsWrapper>
      </SearchWrapper>
      <Button text={searchButton} handler={handleSearchCity} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
