import React from "react";
import "./Cards.css";

export default function Cards() {
    let weatherInfo = {
        degrees: 22,
        description: "Partly Cloudy",
        humidity: 70,
        wind: 5,
        min: 27
    };
    return (
        <div className="Cards">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-info">
                        <div className="card-body">
                            <h5 className="card-title text-primary"><p id="time"></p>
                                <div className="now" id="temperature">{weatherInfo.degrees}</div>
                                <a href="/" id="celsius" class="degrees"> °C /</a><a href="/" id="fahrenheit" class="degrees">°F</a>
                                <p className=""></p></h5>
                            <p className="card-text">{weatherInfo.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-info">
                        <div className="card-body text-primary"><h5 class="card-title">Currently</h5>
                            <p className="card-text"><div class="row-6">Min: {weatherInfo.min}<span id="min-temp"></span>°</div>
                                <div className="row-6">Wind-speed: {weatherInfo.wind}<span id="wind-speed"></span> mph</div>
                                <div className="row-6">Humidity: {weatherInfo.humidity}<span id="humidity"></span> %</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}