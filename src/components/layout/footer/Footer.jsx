const Footer = () => {
  return (
    <>
      <footer className="grid min-h-[300px] bg-[#1D1D1E] py-12">
        <div className="container grid grid-cols-4">
          <div className="flex flex-col">
            <img src="/logo-white.svg" alt="logo" className="w-[300px]" />
            <img src="/socials.svg" alt="socials" className="mt-auto w-28" />
            <p className="mt-6 text-white">2022 Metabnb</p>
          </div>

          <div className="ml-28 flex flex-col text-white">
            <h2 className="text-2xl font-bold">Community</h2>

            <div className="mt-6 space-y-4">
              <p>NFT</p>
              <p>Tokens</p>
              <p>Landlords</p>
              <p>Discord</p>
            </div>
          </div>

          <div className="ml-28 flex flex-col text-white">
            <h2 className="text-2xl font-bold">Places</h2>

            <div className="mt-6 space-y-4">
              <p>Castle</p>
              <p>Farms</p>
              <p>Beach</p>
              <p>Learn more</p>
            </div>
          </div>

          <div className="ml-28 flex flex-col text-white">
            <h2 className="text-2xl font-bold">About us</h2>

            <div className="mt-6 space-y-4">
              <p>Road map</p>
              <p>Creators</p>
              <p>Career</p>
              <p>Contact us</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
