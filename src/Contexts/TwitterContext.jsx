import { Children, createContext, useContext, useState } from "react";

const TwitterContext = createContext();

export const useTwitterStats = () => useContext(YoutubeContext);

export function TwitterProvider({ children }) {
  const token =
    "AAAAAAAAAAAAAAAAAAAAADqZ3gEAAAAAO6Hc53EkqRhM1s2BkBvhXaYZuNY%3DaP6GRUmgcmlgLWYENGKUgnTHL3Ibtpsf7FQJ0F1E2VmxQpiaL8";
  async function getUser(e) {
    e.preventDefault();

    const url = "https://api.x.com/2/users/by/username/ronaldo";
    const options = {
      method: "GET",
      headers: { Authorization: token },
      body: undefined,
    };
    alert("Started");
    try {
      alert("Started");
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const value = {
    getUser,
  };
  return (
    <TwitterContext.Provider value={value}>{children}</TwitterContext.Provider>
  );
}
