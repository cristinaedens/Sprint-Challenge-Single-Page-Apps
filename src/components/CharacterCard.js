import React from "react";
import styled from "styled-components";
export default function CharacterCard(props) {

const CardContainer = styled.div`
background:teal;
`


  const Card = styled.div`
  width: 80%;
  padding: 10px;
  box-shadow: 1px 1px 5px teal;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;


const CardInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  color:#E5A9A4;
`;

const Status = styled.div`
  text-align: center;
  background: #005B47;
  height: 35px;
  color: white;
  padding: 10px;
  border-radius: 15px;
`;

  return (
    <CardContainer className="card-container">
      <Card className="card">
        <img src={props.character.image}  alt="Rick and Morty characters."/>
        <CardInfo className="info-container">
          <h2>Name: {props.character.name}</h2>
          <h3>Gender: {props.character.gender}</h3>
          <p>Species: {props.character.species}</p>
          <p>Origin: {props.character.origin.name}</p>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </CardContainer>
  )
}
