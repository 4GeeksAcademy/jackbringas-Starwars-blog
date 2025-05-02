import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, category }) => {
  const { store, dispatch } = useGlobalReducer();
  const id = parseInt(item.id);

  const getImageUrl = () => {
    if (category === "people") {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    } else if (category === "planets") {
      return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    } else if (category === "vehicles") {
      return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
    }
    return "";
  };

  const isFavorite = store.favorites.some(
    fav => fav.id === id && fav.category === category
  );

  const addFavorite = () => {
    if (!isFavorite) {
      dispatch({
        type: "add-favorite",
        payload: { id, category, name: item.name },
      });
    }
  };

  const getDetailsLink = () => {
    if (category === "people") return `/singleperson/${id}`;
    if (category === "planets") return `/singleplanet/${id}`;
    if (category === "vehicles") return `/singlevehicle/${id}`;
    return "/";
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={getImageUrl()}
        onError={(e) => {
          e.target.src = "";
          e.target.style.backgroundColor = "#e0e0e0";
          e.target.alt = "No image available";
        }}
        className="card-img-top"
        alt={item.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          backgroundColor: "#f5f5f5",
        }}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{item.name}</h5>

          {category === "people" && (
            <p className="card-text">
              <strong>Gender:</strong> {item.gender} <br />
              <strong>Hair Color:</strong> {item.hair_color} <br />
              <strong>Eye Color:</strong> {item.eye_color}
            </p>
          )}

          {category === "planets" && (
            <p className="card-text">
              <strong>Population:</strong> {item.population} <br />
              <strong>Climate:</strong> {item.climate} <br />
              <strong>Terrain:</strong> {item.terrain}
            </p>
          )}

          {category === "vehicles" && (
            <p className="card-text">
              <strong>Model:</strong> {item.model} <br />
              <strong>Class:</strong> {item.vehicle_class} <br />
              <strong>Maker:</strong> {item.manufacturer}
            </p>
          )}
        </div>

        <div className="d-flex justify-content-between mt-3">
          <Link to={getDetailsLink()}>
            <button className="btn btn-primary">Learn More</button>
          </Link>

          {isFavorite ? (
            <button
              className="btn btn-dark text-white"
              disabled
              style={{
                opacity: 1,
                pointerEvents: "none",
                cursor: "default"
              }}
            >
              ❤️ Added
            </button>
          ) : (
            <button
              className="btn btn-outline-warning"
              onClick={addFavorite}
            >
              ❤️ Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

