import { NftItem } from "@components/NftItem";

/**
 *  function will generate an array of numbers from 1 - num;
 * @param {Number} num
 */
function generateNumbers(num) {
  let numArr = [];
  let base = 1;

  do {
    numArr.push(base);
    base += 1;
  } while (base <= num);

  return numArr;
}

function PlaceToStay() {
  const nftIDs = generateNumbers(16);

  return (
    <>
      <section className="py-28">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
          <button className="flex h-12 items-center gap-3 rounded-xl border px-4">
            Location
            <img src="/settings.svg" alt="setings" />
          </button>
        </div>
      </section>

      {/* List of NFTs */}
      <section className="pb-28">
        <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {nftIDs.map((nft) => (
            <NftItem key={nft} img={nft} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PlaceToStay;
