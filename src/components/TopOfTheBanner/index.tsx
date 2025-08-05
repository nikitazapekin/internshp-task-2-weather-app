import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants";
import { getCurrentTime } from "@utils/helpers/getCurrentTime/getCurrentTime";

import { SearchInput, SearchWrapper, Time, TopWrapper } from "./styled";

const TopOfTheBanner = () => {
  const { timeString, dateString } = getCurrentTime();

  return (
    <TopWrapper>
      <Time>
        {timeString} <br />
        {dateString}
      </Time>
      <SearchWrapper>
        <SearchInput />
        <Button text={UI_CONSTANTS.buttons.searchButton} />
      </SearchWrapper>
    </TopWrapper>
  );
};

export default TopOfTheBanner;
