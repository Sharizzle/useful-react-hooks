import { useState, useEffect } from "react";

export const MOBILE = "MOBILE";
export const TABLETSMALL = "TABLETSMALL";
export const TABLETBIG = "TABLETBIG";
export const DESKTOP = "DESKTOP";
export const LARGEDESKTOP = "LARGEDESKTOP";

const getDevice = (width) => {
  if (width < 768) return MOBILE;
  else if (width < 992) return TABLETSMALL;
  else if (width < 1200) return TABLETBIG;
  else if (width < 1800) return DESKTOP;
  else return LARGEDESKTOP;
};

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    device: getDevice(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () =>
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { viewport };
};

export { useViewport };
