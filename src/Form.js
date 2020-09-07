import React from "react";
import "./Form.css";


export default function Form() {
    let cityInfo = {
        city: "New York"
    }
    return (
        <div className="Form">
            <h1>Welcome to the Weather App</h1>
            <form id="enter-city">
                <div className="form-group place">
                    <input
                        type="username"
                        placeholder="Enter city here..."
                        className="form-control"
                        autofocus="on"
                        autocomplete="off"
                        id="input-city"
                    />
                </div>
                <button type="submit" class="btn btn-primary fix">Go</button>
                <button className="location-button">Current Location</button>
            </form>
            <div className="city">
                <span id="display-city">{cityInfo.city}</span>
                <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="broken clouds" id="icon" className="float-left" />
            </div>
        </div>

    );
}
