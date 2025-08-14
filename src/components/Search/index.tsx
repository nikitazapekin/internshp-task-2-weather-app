import { useSelector } from "react-redux";
import Button from "@components/Button";
import Spinner from "@components/Spinner";
import { UI_CONSTANTS } from "@constants/UI";
import { RELATIVE_POSITION } from "@constants/utilsConstants";
import { useElastic } from "@hooks/useElastic";
import useMobile from "@hooks/useMobile";

import { selectCitiesSuggestions } from "@store/selectors";

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
  const { loading } = useSelector(selectCitiesSuggestions);
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
    const showLoading = loading && !hasSuggestions;
    const showEmptyState = shouldShowSuggestions && !hasSuggestions && !loading;
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
