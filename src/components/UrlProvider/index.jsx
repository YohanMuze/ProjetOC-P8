import { useState, useEffect, createContext } from "react";

export const UrlContext = createContext();
export const UrlProvider = ({ children }) => {
  const getUrl = window.location;
  console.log(getUrl);
  const [currentUrl, setCurrentUrl] = useState(getUrl);
  useEffect(() => {
    setCurrentUrl(getUrl);
    console.log(currentUrl);
  }, [getUrl, currentUrl]);

  return (
    <UrlContext.Provider value={{ currentUrl }}>{children}</UrlContext.Provider>
  );
};
