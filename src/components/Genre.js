import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeByGenre } from "../utils/APIHelper";
import Main from "./Main";

const Genre = () => {
  const [genreData, setGenreData] = useState([]);
  const params = useParams();
  const genreName = params._id;
  useEffect(() => {
    getData(genreName, 20);

    return () => null;
  }, [genreName]);
  const getData = async (genre, size) => {
    let response = await getAnimeByGenre(genre, size);

    if (response.status == "success") {
      setGenreData(response.data.data);
    } else if (response.status == "error") {
      console.log({ response });
      alert(response.data.message);
    }
  };
  return <Main heading={genreName} dataList={genreData} />;
};

export default Genre;
