import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { getAllAnimes } from "../utils/APIHelper";
import Card from "./Card";
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
    <div className="home">
      {allAnimesData.length > 0 &&
        allAnimesData.map(({ title, image }) => (
          <Card title={title} image={image} />
        ))}
    </div>
  );
};

export default Home;
