import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import logo from "../assets/img/logo-star-wars.png";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleRemove = (id, category) => {
    dispatch({
      type: "remove-favorite",
      payload: { id, category },
    });
  };

  const getDetailLink = (fav) => {
    if (fav.category === "people") return `/singleperson/${fav.id}`;
    if (fav.category === "planets") return `/singleplanet/${fav.id}`;
    if (fav.category === "vehicles") return `/singlevehicle/${fav.id}`;
    return "#";
  };

  return (
    <nav className="navbar navbar-light bg-white px-4 shadow-sm">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img
          src={logo}
          alt="Star Wars Logo"
          style={{ height: "60px" }} 
        />
      </Link>

      <div className="dropdown">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ❤️ Favorites ({store.favorites.length})
        </button>

        <ul className="dropdown-menu dropdown-menu-end">
          {store.favorites.length === 0 ? (
            <li className="dropdown-item text-muted">No favorites yet</li>
          ) : (
            store.favorites.map((fav, index) => (
              <li
                key={index}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                <Link to={getDetailLink(fav)} className="text-decoration-none text-dark">
                  {fav.name}
                </Link>
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => handleRemove(fav.id, fav.category)}
                >
                  🗑
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};
