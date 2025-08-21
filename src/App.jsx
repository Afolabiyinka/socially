import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Router from "./Routes/Routes";
import Onboarding from "./Pages/Onboarding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="/app/*" element={<Router />} />
      </Routes>
    </>
  );
}

export default App;
