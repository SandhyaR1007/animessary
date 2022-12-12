import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/APIHelper";

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
    <div>
      <h1>{descriptionData.title}</h1>
      <img src={descriptionData.image} alt={descriptionData.title} />
      <h3>Episodes</h3>
      <p>{descriptionData.episodes}</p>
      <h3>Genre:</h3>
      <p></p>
    </div>
  );
};

export default Description;
