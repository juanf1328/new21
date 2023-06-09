import React from "react";
import "./Card.css";
// import './App.css';

const Card = ({ name, email, id }) => {
  return (
    //pa3
    <div className="tc dib br4 ma3 grow bw2 shadow-5 cartas">
      <h2>{name}</h2>
      <hr/>
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
