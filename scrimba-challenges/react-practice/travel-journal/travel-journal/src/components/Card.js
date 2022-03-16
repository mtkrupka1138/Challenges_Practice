import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img />
            <div className="card-info">
                <div className="card-info-map">
                    <span className="location-country"></span>
                    <span className="maps-link"></span>
                </div>
                <h1 className="location-title"></h1>
                <p className="travel-date"></p>
                <p className="travel-summary"></p>
            </div>
        </div>
    )
}