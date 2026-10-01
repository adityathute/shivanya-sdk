import { useEffect, useState } from "react";

export function useBreakpoint(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [query]);

  return matches;
}

export function useIsMobile(query = "(max-width: 767px)") {
  return useBreakpoint(query);
}
