import SearchCitiesComponent from "@components/Search";
import DateInfo from "@components/Time";

import { TopWrapper } from "./styled";

const TopOfTheBanner = () => {
  return (
    <TopWrapper>
      <DateInfo />
      <SearchCitiesComponent />
    </TopWrapper>
  );
};

export default TopOfTheBanner;
