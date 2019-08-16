import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
border: 1px solid black;
width: 20%;
margin: 1%;
background-color: rgba(168, 107, 50, 0.3);
`;




const StarCard = (props) => {
      console.log("I am in card."); 
      return (
          <CardDiv>
                <h1>{props.char.name}</h1>
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Gender: {props.char.gender}</p>
                <p>Hair Color: {props.char.hair_color}</p>
                <p>Height: {props.char.height}</p>
                <p>Mass: {props.char.mass}</p>
                <p>Skin Color: {props.char.skin_color}</p>
                
          </CardDiv>
      );
  
  
      // return (
      //     <>
      //         <h1> {props.title} </h1>
      //     </>
      // );
  };
  
  export default StarCard;
  