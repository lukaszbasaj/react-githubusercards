import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./components/form/form";
import CardList from "./components/card-list/cardList";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  const [cards, setCards] = useState([]);
  const addNewProfile = cardInfo => {
    setCards(cards.concat(cardInfo));
  };
  return (
    <div className='container'>
      <Form onSubmit={addNewProfile} />
      <CardList cards={cards} />
    </div>
  );
};

ReactDOM.render(
  <App title='The GitHub Cards App' />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
