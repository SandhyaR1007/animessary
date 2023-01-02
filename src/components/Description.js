import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/APIHelper";
import "../styles/Description.css";

const Description = () => {
  const params = useParams();

  const [descriptionData, setDescriptionData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let response = await getAnimeById(params.id);

    if (response.status == "success") {
      console.log({ response });
      setDescriptionData(response.data);
    } else if (response.status == "error") {
      console.log({ response });
      alert(response.data.message);
    }
  };
  return descriptionData == null ? (
    <></>
  ) : (
    <div className="description">
      <div className="description__left">
        <img
          className="description__left-img"
          src={descriptionData.image}
          alt={descriptionData.title}
        />
        <span className="description__left-tag">{descriptionData.type}</span>
        <div>
          <span>Episodes: </span>
          <span>{descriptionData.episodes}</span>
        </div>
        <div>
          <span>Ranking: </span>
          <span>{descriptionData.ranking}</span>
        </div>
      </div>
      <div className="description__right">
        <h1 className="description__right-title">{descriptionData.title}</h1>
        <h4 className="description__right-alter">
          {descriptionData.alternativeTitles[0]}
        </h4>
        <p className="description__right-synopsis">
          {descriptionData.synopsis.slice(0, 300) + "..."}
        </p>
        <div className="description__info">
          <span className="description__info-head">Type: </span>
          <span className="description__info-value">
            {descriptionData.type}
          </span>
        </div>
        <div className="description__info">
          <span className="description__info-head">Status: </span>
          <span className="description__info-value">
            {descriptionData.status}
          </span>
        </div>
        <div className="desciption__right-genres">
          {descriptionData.genres.map((item, index) => (
            <span className="desciption__right-genres__bullet" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
