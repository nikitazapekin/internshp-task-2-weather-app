import CloudyIconDesktop from "@assets/desktop/cloudy.webp";
import FoggyIconDesktop from "@assets/desktop/foggy.webp";
import RainyIconDesktop from "@assets/desktop/rainy.webp";
import SunnyIconDesktop from "@assets/desktop/sunny.webp";
import CloudyIconMobile from "@assets/mobile/cloudy.webp";
import FoggyIconMobile from "@assets/mobile/foggy.webp";
import RainyIconMobile from "@assets/mobile/rainy.webp";
import SunnyIconMobile from "@assets/mobile/sunny.webp";

export const ICONS_CONSTANTS = {
  sunny: { desktop: SunnyIconDesktop, mobile: SunnyIconMobile, alt: "Sunny" },
  foggy: { desktop: FoggyIconDesktop, mobile: FoggyIconMobile, alt: "Foggy" },
  rainy: { desktop: RainyIconDesktop, mobile: RainyIconMobile, alt: "Rainy" },
  cloudy: { desktop: CloudyIconDesktop, mobile: CloudyIconMobile, alt: "Cloudy" },
};
