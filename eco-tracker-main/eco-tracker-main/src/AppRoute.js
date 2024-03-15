import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FootPrint } from "./pages/FootPrint";
import { MyJourneys } from "./pages/MyJourneys";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footprint" element={<FootPrint />} />
      <Route path="/my-journeys" element={<MyJourneys />} />
    </Routes>
  );
};
