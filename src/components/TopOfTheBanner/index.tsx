import Button from "@components/Button";

import { SearchInput, SearchWrapper, Time, TopWrapper } from "./styled";

const TopOfTheBanner = () => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[currentTime.getDay()];
  const day = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  return (
    <TopWrapper>
      <Time>
        {timeString} <br />
        {dateString}
      </Time>
      <SearchWrapper>
        <SearchInput value="33" />
        <Button text="Search" />
      </SearchWrapper>
    </TopWrapper>
  );
};

export default TopOfTheBanner;
