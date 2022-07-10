import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { queries } from "./helper";

 const useDevice = () => {
  const devices = Object.keys(queries);
  const initialState = devices.reduce((obj, device) => {
    obj[device] = false;
    return obj;
  }, {});
  const [deviceMatched, setDeviceMatched] = useState(initialState);
  const mediaMatched = useRef([]);
  const handleChange = () => {
    const newState = {};
    devices.forEach((device, index) => {
      mediaMatched.current.push(window.matchMedia(queries[device]));
      newState[device] = mediaMatched.current[index].matches
    });
    setDeviceMatched(newState);
  };
  useEffect(() => {
    handleChange();
    const medias = mediaMatched.current;
    medias.forEach((media) => {
      media.addEventListener("change", handleChange);
    });
    return () => {
      medias.forEach((media) => {
        media.removeEventListener("change", handleChange);
      });
    };
  }, []);
  return deviceMatched
};

useDevice.displayName = 'useDevice'

export default useDevice;

