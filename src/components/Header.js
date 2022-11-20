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
      <div className="header__content">
        <h1 className="header__content-heading">Explore Top Animes</h1>
        <p className="header__content-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
          provident quibusdam numquam tempora. Aut, ab saepe porro asperiores
          dignissimos, dolorem velit aliquam quisquam, illo aperiam vel
          perferendis debitis deserunt voluptates?
        </p>
        <button className="header__content-button">
          <i className="fa-solid fa-play header__content-button-play"></i>
          <span>Explore</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
