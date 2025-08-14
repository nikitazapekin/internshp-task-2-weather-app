import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { useElastic } from "@hooks/useElastic";

import {
  SearchInput,
  SearchWrapper,
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
    handleInputChange,
    handleSuggestionClick,
    formatCityName,
    handleSearchCity,
    handleKeyDown,
  } = useElastic();

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={UI_CONSTANTS.placeholder}
        />
        <SuggestionsWrapper>
          {showSuggestions && suggestedCities && suggestedCities.length > 0 && (
            <SuggestionsList>
              {suggestedCities.map((city, index) => (
                <SuggestionItem key={`${city.name}-${index}`} onClick={handleSuggestionClick(city)}>
                  {formatCityName(city)}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </SuggestionsWrapper>
      </SearchWrapper>
      <Button text={searchButton} handler={handleSearchCity} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
