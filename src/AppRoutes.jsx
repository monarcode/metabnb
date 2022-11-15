import Layout from "@components/layout";
import Home from "@pages/home";
import PlaceToStay from "@pages/PlaceToStay";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="place-to-stay" element={<PlaceToStay />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
