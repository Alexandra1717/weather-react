import React from "react";
import Form from "./Form"
import Cards from "./Cards"
import Forecast from "./Forecast"
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="weather-app-wrapper">
          <Form />
          <Cards />
          <Forecast />
        </div>
      </div>
      <small> <a href="https://github.com/Alexandra1717/weather-react" target="blank">Open source code </a> by Alexandra Negrea</small>
    </div>
  );
}