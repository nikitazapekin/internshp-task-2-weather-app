import Search from "@components/Search";
import DateInfo from "@components/Time";

import { TopWrapper } from "./styled";

const TopOfTheBanner = () => {
  return (
    <TopWrapper>
      <DateInfo />
      <Search />
    </TopWrapper>
  );
};

export default TopOfTheBanner;
