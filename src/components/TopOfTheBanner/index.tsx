import ErrorBoundary from "@components/ErrorBoundary";
import SearchCitiesComponent from "@components/Search";
import DateInfo from "@components/Time";

import { TopWrapper } from "./styled";

const TopOfTheBanner = () => {
  return (
    <ErrorBoundary>
      <TopWrapper>
        <DateInfo />
        <SearchCitiesComponent />
      </TopWrapper>
    </ErrorBoundary>
  );
};

export default TopOfTheBanner;
