import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { getAllAnimes } from "../utils/APIHelper";
import Card from "./Card";
import Header from "./Header";
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
      <div className="home">
        <h3>Recently Updated</h3>
        <div className="home__animeList">
          {allAnimesData.length > 0 &&
            allAnimesData.map(({ title, image }) => (
              <Card title={title} image={image} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
