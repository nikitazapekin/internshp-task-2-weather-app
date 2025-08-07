import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { SearchInput, Wrapper } from "./styled";

const SearchCitiesComponent = () => {
  return (
    <Wrapper>
      <SearchInput />
      <Button text={UI_CONSTANTS.buttons.searchButton} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
