import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Card from "./Card";
const Home = () => {
  const [allAnimesData, setAllAnimesData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://anime-db.p.rapidapi.com/anime",
      params: {
        page: "1",
        size: "20",
        // search: "Fullmetal",
        // genres: "Fantasy,Drama",
        // sortBy: "ranking",
        // sortOrder: "asc",
      },
      headers: {
        "X-RapidAPI-Key": "f294a746c3mshcebf8b9885eb1eep1c6a56jsn984b7716730c",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data);
        setAllAnimesData(response.data.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="home">
      {allAnimesData.map(({ title, image }) => (
        <Card title={title} image={image} />
      ))}
    </div>
  );
};

export default Home;
