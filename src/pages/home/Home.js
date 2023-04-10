import React from "react";
import { FaClock, FaPlus } from "react-icons/fa";
import NiftyData from "../../components/NiftyData";
import NiftyIndex from "../../components/NiftyIndex";

function Home({ stockData }) {
  return (
    <div className="mx-auto relative overflow-x-auto shadow-md sm:rounded-lg lg:w-5/12 ">
      <div className="flex justify-evenly text-xl p-4 font-medium">
        <h1>STOCK MARKET INDEX</h1>
        <div className="flex">
          <FaClock className="mr-3" />
          <FaPlus />
        </div>
      </div>
      {stockData?.length > 0 ? (
        <>
          <NiftyIndex className="sticky top-0" stockData={stockData} />
          <h3 className="pl-6 pt-6 pb-6 text-gray-500  font-medium text-xs">
            STOCKS
          </h3>
          <NiftyData stockData={stockData} />
        </>
      ) : (
        <div className="flex justify-center m-20 text-blue-500 font-semibold text-xl">
          <h1>Data Loading....</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
