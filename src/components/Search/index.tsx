import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { useElastic } from "@hooks/useElastic";

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
  } = useElastic();

  const handleSearchCity = (): void => {
    setShowSuggestions(false);
  };

  return (
    <Wrapper>
      <SearchInput
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
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
