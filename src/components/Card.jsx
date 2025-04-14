import React from "react";
import { Link } from "react-router-dom";


export const Card = ({ item, category, position }) => {
    const getImageUrl = () => {
        if (category === "people") {
            return `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
        } else if (category === "planets") {
            return `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
        } else if (category === "vehicles") {
            return `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`;
        }
        return "https://via.placeholder.com/300";
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={getImageUrl()} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                {category === "people" && (
                    <p className="card-text">
                        <strong>Gender:</strong> {item.gender} <br />
                        <strong>Hair Color:</strong> {item.hair_color} <br />
                        <strong>Eye Color:</strong> {item.eye_color}
                    </p>
                )}
                    <Link to={"/card/"+ position}>
                        <button className="btn btn-primary">Learn More!</button>
                    </Link>

            </div>
        </div>
    );
};
