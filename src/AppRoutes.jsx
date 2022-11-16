import Layout from "@components/layout";
import Home from "@pages/home";
import PlaceToStay from "@pages/PlaceToStay";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="place-to-stay" element={<PlaceToStay />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AppRoutes;
