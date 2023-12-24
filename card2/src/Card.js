import React, { useState } from "react";
import "./App.css";

const Card = (props) => {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 2);
    console.log(incre);
  };

  return (
    <>
      <div ClassName="card-container">
        <div ClassName="card u-clearfix">
          <div ClassName="card-body">
            <span ClassName="card-number card-circle subtle">01</span>
            <span ClassName="card-author subtle">{props.name}</span>
            <h2 ClassName="card-title"> class</h2>
            <span ClassName="card-description subtle"></span>
            <div ClassName="card-read"></div>
            <span ClassName="card-tag card-circle subtle"></span>
          </div>
          <img
            src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
            alt=""
            ClassName="card-media"
          />
        </div>
        <div ClassName="card-shadow"></div>
      </div>
      <button onClick={incre}> button</button>
    </>
  );
};

export default Card;
