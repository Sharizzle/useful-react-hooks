import { useState, useEffect } from "react";

const useMediaQuery = (type: string, width: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  const query: string = `(${type}: ${width})`;

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (): void => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export { useMediaQuery };
