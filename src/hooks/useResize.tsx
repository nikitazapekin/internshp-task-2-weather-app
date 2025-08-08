import { BREAKPOINT_TRIGGER_WIDTH } from "@constants";
import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= BREAKPOINT_TRIGGER_WIDTH);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobileView };
};

export default useResize;
