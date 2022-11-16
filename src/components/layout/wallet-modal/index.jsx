import { motion } from "framer-motion";

const backdrop = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const modalAnim = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    // scale:
  },
};

export default function WalletModal({ close }) {
  return (
    <motion.div
      variants={backdrop}
      initial="initial"
      animate="animate"
      exit="initial"
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/30 filter backdrop-blur-sm"
    >
      <motion.div
        variants={modalAnim}
        className="min-h-[300px] w-[min(90%,600px)] rounded-2xl bg-white"
      >
        <div className="flex justify-between border-b p-6">
          <h2 className="text-2xl">Connect Wallet</h2>

          <button onClick={() => close(false)}>
            <img src="/x.svg" />
          </button>
        </div>

        <div className="space-y-4 p-6">
          <p>Choose your preferred wallet:</p>

          <div className="relative rounded-xl border py-3 px-[20px] transition-all hover:bg-slate-50">
            <div className="flex items-center gap-4">
              <img src="/metamask.png" alt="meta" />
              <p>Metamask</p>
            </div>
            <img
              src="/chevron-right.svg"
              alt="arrow"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="relative rounded-xl border py-3 px-[20px] transition-all hover:bg-slate-50">
            <div className="flex items-center gap-4">
              <img src="/walletCon.png" alt="wallet" />
              <p>WalletConnect</p>
            </div>
            <img
              src="/chevron-right.svg"
              alt="arrow"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
