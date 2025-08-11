import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { SearchInput, Wrapper } from "./styled";

const SearchCitiesComponent = () => {
  const { searchButton } = UI_CONSTANTS.buttons;

  return (
    <Wrapper>
      <SearchInput />
      <Button text={searchButton} handler={() => {}} />
    </Wrapper>
  );
};

export default SearchCitiesComponent;
