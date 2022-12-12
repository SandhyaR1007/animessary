import React from "react";
import Card from "./Card";

const Main = ({ heading, dataList }) => {
  return (
    <div className="home">
      <h3>{heading}</h3>
      <div className="home__animeList">
        {dataList.length > 0 &&
          dataList.map(({ _id, title, image }) => (
            <Card key={_id} title={title} image={image} _id={_id} />
          ))}
      </div>
    </div>
  );
};

export default Main;
