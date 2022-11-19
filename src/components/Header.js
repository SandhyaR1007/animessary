import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { getOneAnimeByRanking } from "../utils/APIHelper";

const Header = () => {
  const [animeData, setAnimeData] = useState(null);
  // useEffect(() => {
  //   getData();
  // }, []);
  const getData = async () => {
    let response = await getOneAnimeByRanking();

    if (response.status == "success") {
      console.log(response.data.data);
      setAnimeData(response.data);
    } else if (response.status == "error") {
      console.log({ response });
      alert(response.data.message);
    }
  };

  return (
    <div className="header">
      <h1>Explore Top Animes</h1>
    </div>
  );
};

export default Header;
