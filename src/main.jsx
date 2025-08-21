import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./Contexts/UserContext.jsx";
import { TwitterProvider } from "./Contexts/TwitterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TwitterProvider>
      <BrowserRouter>
        <ThemeProvider>
          <GoogleOAuthProvider clientId="682358395359-tobvtstqr1opo2dh3qsrceqohmj21ufd.apps.googleusercontent.com">
            <UserProvider>
              <App />
            </UserProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </TwitterProvider>
  </StrictMode>
);
