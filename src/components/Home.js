import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { getAllAnimes } from "../utils/APIHelper";
import Card from "./Card";
import Header from "./Header";
import Main from "./Main";
const Home = () => {
  const [allAnimesData, setAllAnimesData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let response = await getAllAnimes();

    if (response.status == "success") {
      console.log({ response });
      setAllAnimesData(response.data.data);
    } else if (response.status == "error") {
      console.log({ response });
      alert(response.data.message);
    }
  };

  return (
    <>
      <Header />

      <Main dataList={allAnimesData} heading="Recently Updated" />
    </>
  );
};

export default Home;
