import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Singleperson = () => {
  const { uid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(res => res.json())
      .then(data => setPerson(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

  return (
    <div className="container mt-5">
      {person ? (
        <>
          <div className="row">
            {/* Imagen y descripción */}
            <div className="col-md-6 text-center">
              <img
                src={imageUrl}
                onError={(e) => {
                  e.target.src = "";
                  e.target.style.backgroundColor = "#e0e0e0";
                }}
                className="img-fluid rounded"
                alt={person.name}
                style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>{person.name}</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatem. Ipsum dolorum quidem
                accusantium magni assumenda, tenetur necessitatibus. Expedita corporis voluptatibus, ullam fugit
                reprehenderit minima architecto consequatur atque aperiam! Nihil.
              </p>
            </div>
          </div>

          {/* Línea roja separadora */}
          <hr className="my-4 border-danger border-2 opacity-100" />

          {/* Datos en fila */}
          <div className="row text-center text-danger fw-bold fs-6">
            <div className="col">
              <div>Name</div>
              <div className="text-dark">{person.name}</div>
            </div>
            <div className="col">
              <div>Birth Year</div>
              <div className="text-dark">{person.birth_year}</div>
            </div>
            <div className="col">
              <div>Gender</div>
              <div className="text-dark">{person.gender}</div>
            </div>
            <div className="col">
              <div>Height</div>
              <div className="text-dark">{person.height}</div>
            </div>
            <div className="col">
              <div>Skin Color</div>
              <div className="text-dark">{person.skin_color}</div>
            </div>
            <div className="col">
              <div>Eye Color</div>
              <div className="text-dark">{person.eye_color}</div>
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
