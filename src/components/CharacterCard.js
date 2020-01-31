import React from "react";

export default function CharacterCard(props) {

  return (
    <div className="card-container">
      <div className="card">
        <img src={props.character.image} />
        <div className="info-container">
          <h2>Name: {props.character.name}</h2>
          <h3>Gender: {props.character.gender}</h3>
          <p>Species: {props.character.species}</p>
          <p>Origin: {props.character.origin.name}</p>
        </div>
        <div>Status: {props.character.status}</div>
      </div>
    </div>
  )
}
