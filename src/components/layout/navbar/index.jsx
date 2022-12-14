import Hamburger from "@components/hamburger";
import { linkList } from "@components/layout/navbar/linksList";
import WalletModal from "@components/layout/wallet-modal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && <WalletModal close={setShowModal} />}
      </AnimatePresence>

      <nav className="flex h-[120px] flex-col bg-white">
        <div className="container flex h-full justify-between">
          <img
            src="/logo.svg"
            alt="logo"
            className="block h-full w-[130px] object-contain md:w-[200px]"
          />

          {/* desktop nav links */}
          <div className="hidden gap-10 py-6 md:flex-row lg:flex">
            {linkList.map((link) => (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `self-center capitalize ${
                    isActive ? "text-brand" : "text-dark"
                  }`
                }
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* mobile nav links */}
          <AnimatePresence mode="wait">
            {showMenu && (
              <motion.div
                initial={{
                  x: "100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: "100vw",
                  opacity: 0,
                }}
                className="fixed inset-0 z-[99] mt-[120px] flex h-[calc(100vh-120px)] flex-col items-center gap-10 bg-white py-6 lg:hidden"
              >
                {linkList.map((link) => (
                  <NavLink
                    key={link.id}
                    className={({ isActive }) =>
                      `self-center capitalize ${
                        isActive ? "text-brand" : "text-dark"
                      }`
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <Hamburger state={showMenu} close={setshowMenu} />

          <button
            onClick={() => setShowModal(true)}
            className="hidden h-fit self-center rounded-[10px] bg-brand py-3 px-6 text-white lg:block"
          >
            Connect wallet
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="fixed bottom-5 right-5 z-50 grid h-20 w-20 place-items-center whitespace-nowrap rounded-full bg-brand text-sm text-white shadow-xl lg:hidden"
          >
            <img src="/wallet-icon.svg" alt="wallet" className="h-8 w-8" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
