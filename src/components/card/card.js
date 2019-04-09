import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className='list-group-item  list-group-item-primary'>
      <img
        style={{ width: "10%", borderRadius: "3px" }}
        src={props.avatar_url}
        alt='avatar'
      />

      <div style={{ display: "inline-block", margin: 10 }}>
        <div className='name' style={{ fontSize: "100%" }}>
          Name: {props.name}
          <div className='company'> Company: {props.company} </div>
          <div className='login'>login: {props.login} </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
