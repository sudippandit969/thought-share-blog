import React from "react";
import "./BodyPage.css";
import Card from "./Card";
import assetFiles from "../assets/asset";

const BodyPage = () => {
  return (
    <div className="body-container">
      {
        assetFiles.map((item) => <Card product={item}/>)
      }
      <h1></h1>
    </div>
  );
};

export default BodyPage;
