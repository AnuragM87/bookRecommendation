import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  autoBiography: [
    { Name: "Experiment with truth", Author: "M.k Gandhi", Rating: "5/5" },
    {
      Name: "Wings of fire",
      Author: "Arun Tiwari",
      Rating: "4.5/5"
    }
  ],

  premChandra: [
    {
      Name: "Godaan",
      Author: "premChandra",
      Rating: "4.8/5"
    },
    { Name: "Rangbhumi", Author: "premChandra", Rating: "4/5" }
  ],

  Scifi: [
    {
      Name: "Future Of Humanity",
      Author: "Michio Kaku",
      Rating: "4.9/5"
    },
    {
      Name: "The God Equation: The Quest for a Theory of Everything",
      Author: "Michio Kaku",
      Rating: "4.9/5"
    }
  ]
};

export default function App() {
  const [lang, setLang] = useState("premChandra");

  function genreClickHandler(language) {
    setLang(language);
  }

  return (
    <div className="App">
      <div class="top">
        <h2>Books recommendation</h2>
      </div>

      <div>
        {Object.keys(dataBase).map((language) => (
          <button class="bookbtn" onClick={() => genreClickHandler(language)}>
            {language}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ol>
          {dataBase[lang].map((book) => (
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
