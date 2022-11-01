import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  autoBiography: [
    { Name: "Experiment with truth", Author: "M.k Gandhi", Rating: "5/5" },
    {
      Name: "Wings of fire",
      Author: "Arun Tiwari",
      Rating: "4.5/5",
    },
  ],

  HindiNovel: [
    {
      Name: "Godaan",
      Author: "premChandra",
      Rating: "4.8/5",
    },
    { Name: "Rangbhumi", Author: "premChandra", Rating: "4/5" },
  ],

  Scifi: [
    {
      Name: "Future Of Humanity",
      Author: "Michio Kaku",
      Rating: "4.9/5",
    },
    {
      Name: "The God Equation: The Quest for a Theory of Everything",
      Author: "Michio Kaku",
      Rating: "4.9/5",
    },
  ],
};

export default function App() {
  const [userBook, setBook] = useState("HindiNovel");

  function bookClickHandler(event) {
    setBook(event);
  }

  return (
    <div className="App">
      <div class="top">
        <h2>Books recommendation</h2>
      </div>

      <div>
        {Object.keys(dataBase).map((event) => (
          <button class="bookbtn" onClick={() => bookClickHandler(event)}>
            {event}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ol>
          {dataBase[userBook].map((book) => (
            <li key={book.name}>
              <div style={{ height: "5rem", width: "40rem" }}>
                Name: '{book.Name}' Authour: '{book.Author}' Rating: '
                {book.Rating}'
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
