import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { SearchInput, Wrapper } from "./styled";

const SearchCitiesComponent = () => {
  const { searchButton } = UI_CONSTANTS.buttons;

  const handleSearchCity = () => {};

  return (
    <Wrapper>
      <SearchInput />
      <Button text={searchButton} handler={handleSearchCity} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
