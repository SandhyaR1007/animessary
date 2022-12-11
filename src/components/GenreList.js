import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllGenre } from "../utils/APIHelper";
import "../styles/GenreList.css";
const GenreList = ({ isShown, setIsShown }) => {
  const [genreList, setGenreList] = useState([]);
  const getAllGenreList = async () => {
    let response = await getAllGenre();

    if (response.status == "success") {
      console.log(response.data);
      setGenreList(response.data);
    } else if (response.status == "error") {
      console.log({ response });
      alert(response.data.message);
    }
  };
  useEffect(() => {
    getAllGenreList();

    return () => null;
  }, []);

  return (
    <ul className="genreList" onMouseLeave={() => setIsShown(false)}>
      {genreList?.length > 0
        ? genreList.map((item) => (
            <Link
              to={`/genre/${item._id}`}
              key={item._id}
              onClick={() => setIsShown(false)}
            >
              <li className="genreList__list-item">{item._id}</li>
            </Link>
          ))
        : ""}
    </ul>
  );
};

export default GenreList;
