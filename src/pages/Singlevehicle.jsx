import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Singlevehicle = () => {
  const { uid } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
      .then(res => res.json())
      .then(data => setVehicle(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`;

  return (
    <div className="container mt-5">
      {vehicle ? (
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
                alt={vehicle.name}
                style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>{vehicle.name}</h2>
              <p className="text-muted">
                This vehicle is part of the Star Wars universe and contributes to many epic moments in the saga.
              </p>
            </div>
          </div>

          <hr className="my-4 border-danger border-2 opacity-100" />

          <div className="row text-center text-danger fw-bold fs-6">
            <div className="col">
              <div>Name</div>
              <div className="text-dark">{vehicle.name}</div>
            </div>
            <div className="col">
              <div>Model</div>
              <div className="text-dark">{vehicle.model}</div>
            </div>
            <div className="col">
              <div>Class</div>
              <div className="text-dark">{vehicle.vehicle_class}</div>
            </div>
            <div className="col">
              <div>Length</div>
              <div className="text-dark">{vehicle.length}</div>
            </div>
            <div className="col">
              <div>Passengers</div>
              <div className="text-dark">{vehicle.passengers}</div>
            </div>
            <div className="col">
              <div>Manufacturer</div>
              <div className="text-dark">{vehicle.manufacturer}</div>
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
