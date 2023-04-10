import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import axios from "axios";
import Banner from "./components/Banner";
import { data1, data2 } from "./test/DummyData";
import { Constants } from "./components/Constants";

function App() {
  const [stockData, setStockData] = useState([]);

  //function for fetching the api with nifty data
  const fetchAPI = () => {
    const options = {
      method: "GET",
      url: Constants.url,
      params: { Indices: "NIFTY 50" },
      headers: {
        "X-RapidAPI-Host": Constants["X-RapidAPI-Host"],
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setStockData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //function for testing fetchfunction with dummy data
  let counter = 1;
  const dummyFetchApi = () => {
    console.log("Dummy fetch", counter);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(counter % 2 === 0 ? setStockData(data1) : setStockData(data2));
      }, 100);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      fetchAPI();
      // dummyFetchApi();
      //counter++; //used by dummyFetchApi
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <>
        <Banner />
        <Home stockData={stockData} />
      </>
    </div>
  );
}

export default App;
