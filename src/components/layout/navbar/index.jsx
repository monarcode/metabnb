import { linkList } from "@components/layout/navbar/linksList";
import WalletModal from "@components/layout/wallet-modal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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
            className="block h-full w-[200px] object-contain"
          />

          <div className="flex gap-10">
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

          <button
            onClick={() => setShowModal(true)}
            className="h-fit self-center rounded-md bg-brand py-3 px-6 text-white"
          >
            Connect wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
