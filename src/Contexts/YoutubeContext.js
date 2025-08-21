import { Children, createContext, useContext, useState } from "react";

const YoutubeContext = createContext();

export const getYoutubeStats = () => useContext(YoutubeContext);

export function YoutubeProvider({ children }) {
  const value = {};
  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
}
