import React from "react";
import Card from "../card/card";

const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default CardList;
