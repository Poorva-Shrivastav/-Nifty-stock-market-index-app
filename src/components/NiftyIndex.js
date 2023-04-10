import React from "react";

function NiftyIndex({ stockData }) {
  const nifty = stockData[0]; //as nifty50 data is present at the 0th index of the api response
  return (
    <>
      <div
        className="flex justify-evenly bg-black text-white p-4 rounded-lg "
        key={nifty.symbol}
      >
        <h2 className="font-extralight">{nifty.symbol}</h2>
        <div className="text-lg">
          <h2 className="font-extrabold">{nifty.lastPrice}</h2>
          <div style={nifty.change > 0 ? { color: "green" } : { color: "red" }}>
            {nifty.pChange}%
          </div>
        </div>
      </div>
    </>
  );
}

export default NiftyIndex;
