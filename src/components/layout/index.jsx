import Footer from "@components/layout/footer/Footer";
import Navbar from "@components/layout/navbar";
import PageTransition from "@components/page-transition";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
}

export default Layout;
