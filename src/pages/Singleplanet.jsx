import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Singleplanet = () => {
  const { uid } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

  return (
    <div className="container mt-5">
      {planet ? (
        <>
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={imageUrl}
                onError={(e) => {
                  e.target.src = "";
                  e.target.style.backgroundColor = "#e0e0e0";
                }}
                className="img-fluid rounded"
                alt={planet.name}
                style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>{planet.name}</h2>
              <p className="text-muted">
                This planet is known for its unique terrain and population. It plays a role in the galaxy's balance.
              </p>
            </div>
          </div>

          <hr className="my-4 border-danger border-2 opacity-100" />

          <div className="row text-center text-danger fw-bold fs-6">
            <div className="col">
              <div>Name</div>
              <div className="text-dark">{planet.name}</div>
            </div>
            <div className="col">
              <div>Population</div>
              <div className="text-dark">{planet.population}</div>
            </div>
            <div className="col">
              <div>Climate</div>
              <div className="text-dark">{planet.climate}</div>
            </div>
            <div className="col">
              <div>Diameter</div>
              <div className="text-dark">{planet.diameter}</div>
            </div>
            <div className="col">
              <div>Gravity</div>
              <div className="text-dark">{planet.gravity}</div>
            </div>
            <div className="col">
              <div>Terrain</div>
              <div className="text-dark">{planet.terrain}</div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/" className="btn btn-dark px-4">Back to Home</Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
