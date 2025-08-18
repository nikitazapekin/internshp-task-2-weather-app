import NoGeolocationBackground from "@assets/NoGeolocationBackground.webp";

import { Image, Text, Wrapper } from "./styled";

const GeolocationIsTurnOff = () => {
  return (
    <Wrapper>
      <Image src={NoGeolocationBackground} data-testid="geolocation-is-turn-off" />
      <Text>Geolocation is disabled. Please enter a city to view the weather</Text>
    </Wrapper>
  );
};

export default GeolocationIsTurnOff;
