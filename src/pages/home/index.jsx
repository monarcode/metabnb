import { NftItem } from "@components/NftItem";

export default function Home() {
  return (
    <>
      <header className="container grid h-[800px] grid-cols-1 gap-28 py-4 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="leading-text">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>

          <p className="my-6 text-lg text-dark">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="search-bar flex items-center overflow-hidden rounded-lg">
            <input
              className="block h-[54px] flex-grow border-0 pl-6 placeholder:font-light placeholder:text-[#B8B8B8]"
              type="text"
              name="search"
              id="search"
              placeholder="Search for location"
            />
            <button className="block h-[54px] flex-shrink-0 bg-brand px-8 text-center text-white transition-all hover:bg-[#7c1f5f] md:px-16">
              Search
            </button>
          </div>
        </div>

        <div className="grid">
          <img
            src="/header-image.webp"
            alt="header"
            className="h-full w-full object-contain"
          />
        </div>
      </header>

      <section className="flex h-[70px] items-center bg-brand">
        <div className="container flex flex-wrap justify-around">
          <img src="/mbtoken.svg" alt="mbtoken" className="w-16 md:w-40" />
          <img src="/metamask.svg" alt="mbtoken" className="w-16 md:w-40" />
          <img src="/opensea.svg" alt="mbtoken" className="w-16 md:w-40" />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h1 className="text-center text-3xl md:text-5xl">
            Inspiration for your next adventure
          </h1>

          <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-4">
            <NftItem img={5} />
            <NftItem img={6} />
            <NftItem img={7} />
            <NftItem img={8} />
            <NftItem img={1} />
            <NftItem img={2} />
            <NftItem img={3} />
            <NftItem img={4} />
          </div>
        </div>
      </section>

      <section className="mt-20 grid min-h-[calc(100vh-200px)] bg-brand">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(20px,5vw,48px)] font-bold leading-[60px] text-white md:mb-[35px]">
              Metabnb NFTs
            </h2>

            <p className="text-lg font-normal leading-9 text-white">
              Discover our NFT gift cards collection. Loyal
              <br /> customers gets amazing gift cards which are <br /> traded
              as NFTs. These NFTs gives our cutomer
              <br /> access to loads of our exclusive services.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 md:p-0">
            <img src="/bannr.webp" alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
}
