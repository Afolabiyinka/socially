import React, { useContext, useState, createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  function handleSuccess(credentialResponse) {
    const decodedUser = jwtDecode(credentialResponse.credential);
    setUser(decodedUser);
    localStorage.setItem("socially user", JSON.stringify(decodedUser));
    setIsLoading(false);
    navigate("/app/dashboard");
  }

  function handleError() {
    console.log("error");
    setIsLoading(false);
  }

  function handleLogout() {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("socially user");
      navigate("/");
    }, 3000);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("socially user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleError,
        handleSuccess,
        isLoading,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
