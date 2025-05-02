import React, { useEffect } from "react";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = async () => {
    try {
      const res = await fetch("https://www.swapi.tech/api/people");
      const data = await res.json();
      const first8 = data.results.slice(0, 8);

      const detailedPeople = await Promise.all(
        first8.map(async (person) => {
          const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}`);
          const data = await res.json();
          return {
            ...data.result.properties,
            name: person.name,
            uid: person.uid,
            id: parseInt(person.uid),
            category: "people"
          };
        })
      );

      dispatch({ type: "set-people", payload: detailedPeople });
    } catch (err) {
      console.error(err);
    }
  };

  const getPlanets = async () => {
    try {
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      const first8 = data.results.slice(0, 8);

      const detailedPlanets = await Promise.all(
        first8.map(async (planet) => {
          const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
          const data = await res.json();
          return {
            ...data.result.properties,
            name: planet.name,
            uid: planet.uid,
            id: parseInt(planet.uid),
            category: "planets"
          };
        })
      );

      dispatch({ type: "set-planets", payload: detailedPlanets });
    } catch (err) {
      console.error(err);
    }
  };

  const getVehicles = async () => {
    try {
      const res = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await res.json();
      const first8 = data.results.slice(0, 8);

      const detailedVehicles = await Promise.all(
        first8.map(async (vehicle) => {
          const res = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`);
          const data = await res.json();
          return {
            ...data.result.properties,
            name: vehicle.name,
            uid: vehicle.uid,
            id: parseInt(vehicle.uid),
            category: "vehicles"
          };
        })
      );

      dispatch({ type: "set-vehicles", payload: detailedVehicles });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1 className="section-title">People</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {store.people?.map((item, index) => (
          <div className="col" key={index}>
            <Card item={item} category="people" />
          </div>
        ))}
      </div>

      <h1 className="section-title mt-5">Planets</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {store.planets?.map((item, index) => (
          <div className="col" key={index}>
            <Card item={item} category="planets" />
          </div>
        ))}
      </div>

      <h1 className="section-title mt-5">Vehicles</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mb-5">
        {store.vehicles?.map((item, index) => (
          <div className="col" key={index}>
            <Card item={item} category="vehicles" />
          </div>
        ))}
      </div>
    </div>
  );
};
