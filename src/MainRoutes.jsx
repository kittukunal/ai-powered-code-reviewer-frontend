import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import App from "./App"; // Code Reviewer

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/review" element={<App />} />
        <Route
          path="*"
          element={
            <div className="text-white text-center mt-20 text-xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
