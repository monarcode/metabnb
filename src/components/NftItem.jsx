export function NftItem({ img }) {
  return (
    <div className="relative flex h-[372px] flex-col rounded-[31px] border p-4 pb-5">
      <div className="group relative h-[265px] flex-shrink-0 overflow-hidden rounded-[15px]">
        {/* heart icon */}
        <img
          src="/heart.svg"
          alt="heart"
          className="absolute top-4 right-4 z-20 h-6 w-6"
        />

        {/* nft image */}
        <img
          src={`/nfts/${img}.webp`}
          alt="nft"
          className="z-10 h-full w-full object-cover transition-all group-hover:scale-125"
        />
      </div>

      <div className="flex-gow mt-4 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-xs">
          <p>Desert king</p>
          <p className="font-bold">1MBT per night</p>
        </div>
        <div className="flex items-center justify-between text-xs">
          <p>2345km away</p>
          <p className="font-bold">available for 2weeks stay</p>
        </div>
        <img src="/stars.svg" alt="star-rating" className="w-[100px]" />
      </div>
    </div>
  );
}
