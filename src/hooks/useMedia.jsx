import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useMedia = (mediaQuery) => {
  const [isMatched, setMatched] = useState(false);
  const mediaMatched = window.matchMedia(mediaQuery);
  const handleChange = () => {
    setMatched(mediaMatched.matches);
  };
  useEffect(() => {
    handleChange();
    mediaMatched.addEventListener("change", handleChange);
    return () => {
      mediaMatched.removeEventListener("change", handleChange);
    };
  }, []);
  return isMatched;
};

useMedia.displayName = "useMedia";

export default useMedia;
