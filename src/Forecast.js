import React from "react";
import "./Forecast";

export default function Forecast() {
    return (
        <div className="Forecast">
            <div className="row" id="forecast">
                <div className="col-2">2:00
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="new" />Max 33° Min 33°
          </div>
                <div className="col-2">5:00
          <img src="http://openweathermap.org/img/wn/03n@2x.png" alt="new" />
          Max 30°<br /> Min 30°
        </div>
                <div className="col-2">8:00
          <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="new" />
          Max 28°<br /> Min 28°
        </div>
                <div className="col-2">11:00
          <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="new" />
          Max 33°<br /> Min 33°
        </div>
                <div className="col-2">14:00
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="new" />
          Max 32° Min 32°
        </div>
            </div>
        </div>
    )
}