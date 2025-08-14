import { useSelector } from "react-redux";
import Button from "@components/Button";
import Spinner from "@components/Spinner";
import { UI_CONSTANTS } from "@constants/UI";
import { RELATIVE_POSITION } from "@constants/utilsConstants";
import { useElastic } from "@hooks/useElastic";
import useMobile from "@hooks/useMobile";

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
    const hasInput = inputValue?.length > 0;
    const hasSuggestions = suggestedCities?.length > 0;
    const shouldShowSuggestions = showSuggestions && hasInput;
    const showLoading = isLoadingSuggestions && !hasSuggestions;
    const showEmptyState = shouldShowSuggestions && !hasSuggestions && !isLoadingSuggestions;
    const showSuggestionsList = shouldShowSuggestions && hasSuggestions;

    return (
      <SuggestionsContent height={shouldShowSuggestions}>
        {showLoading && <Spinner position={RELATIVE_POSITION} />}

        {showEmptyState && (
          <NothingFoundText>
            {nothingFoundText} {inputValue}
          </NothingFoundText>
        )}

        {showSuggestionsList && (
          <>
            {suggestedCities.map((city, index) => (
              <SuggestionItem key={`${city.name}-${index}`} onClick={handleSuggestionClick(city)}>
                {formatCityName(city)}
              </SuggestionItem>
            ))}
          </>
        )}
      </SuggestionsContent>
    );
  };

  const { isMobile } = useMobile();

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
      <Button text={searchButton} handler={handleSearchCity} isFullWidth={isMobile} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;

/*   const renderSuggestions = () => {
    return (
      <SuggestionsContent
        height={inputValue.length > 0 && showSuggestions && DEFAULT_HEIGHT_OF_CITY_SUGGESTIONS}
      >
        {isLoadingSuggestions && suggestedCities.length == 0 && (
          <Spinner position={RELATIVE_POSITION} />
        )}
        {showSuggestions &&
          suggestedCities.length == 0 &&
          inputValue.length > 0 &&
          !isLoadingSuggestions && (
            <NothingFoundText>
              {nothingFoundText} {inputValue}
            </NothingFoundText>
          )}
        {showSuggestions && suggestedCities && suggestedCities.length > 0 && (
          <>
            {suggestedCities.map((city, index) => (
              <SuggestionItem key={`${city.name}-${index}`} onClick={handleSuggestionClick(city)}>
                {formatCityName(city)}
              </SuggestionItem>
            ))}
          </>
        )}
      </SuggestionsContent>
    );
  }; */
