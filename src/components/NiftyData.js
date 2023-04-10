import React from "react";

function NiftyData({ stockData }) {
  const companies = stockData.slice(1); //nifty listed companies data is present from the 1st index of the api response
  return (
    <>
      {companies.map((stock) => (
        <div
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          key={stock.symbol}
        >
          <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between">
            <div className="px-6 py-4 font-extrabold text-black whitespace-nowrap dark:text-white ">
              {stock.symbol}
            </div>
            <div className="text-right w-1/3 pr-10">
              <p className="text-black font-extrabold pb-2">
                {stock.lastPrice}
              </p>
              <div
                style={stock.change > 0 ? { color: "green" } : { color: "red" }}
              >
                <p>
                  <span className="mr-2">
                    ({stock.change > 0 ? stock.change : stock.change})
                  </span>
                  {stock.pChange}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NiftyData;
