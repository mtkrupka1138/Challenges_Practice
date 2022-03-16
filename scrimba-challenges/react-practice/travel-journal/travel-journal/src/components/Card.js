import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="location"/>
            <div className="card-info">
                <div className="card-info-map">
                    <span className="location-country">{props.item.location}</span>
                    <span className="maps-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1 className="location-title">{props.item.title}</h1>
                <p className="travel-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel-summary">{props.item.description}</p>
            </div>
        </div>
    )

}