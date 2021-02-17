import { useState, useEffect } from "react";

export const MOBILE: string = "MOBILE";
export const TABLETSMALL: string = "TABLETSMALL";
export const TABLETBIG: string = "TABLETBIG";
export const DESKTOP: string = "DESKTOP";
export const LARGEDESKTOP: string = "LARGEDESKTOP";

const getDevice = (width: number) => {
  if (width < 768) return MOBILE;
  else if (width < 992) return TABLETSMALL;
  else if (width < 1200) return TABLETBIG;
  else if (width < 1800) return DESKTOP;
  else return LARGEDESKTOP;
};

interface ViewObj {
  width: number;
  device: string;
}

const useViewport = () => {
  const [viewport, setViewport] = useState<ViewObj>({
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
