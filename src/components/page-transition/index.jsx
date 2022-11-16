import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function PageTransition() {
  return (
    <>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="initial"
        className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden"
      >
        <Outlet />
      </motion.div>
    </>
  );
}
