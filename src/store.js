
const getInitialFavorites = () => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
};

export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: getInitialFavorites() 
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "set-people") {
    return {
      ...store,
      people: action.payload
    };
  }

  if (action.type === "set-planets") {
    return {
      ...store,
      planets: action.payload
    };
  }

  if (action.type === "set-vehicles") {
    return {
      ...store,
      vehicles: action.payload
    };
  }

  if (action.type === "add-favorite") {
    const exists = store.favorites.some(
      fav => fav.id === action.payload.id && fav.category === action.payload.category
    );
    if (exists) return store;

    const updated = [...store.favorites, action.payload];
    localStorage.setItem("favorites", JSON.stringify(updated));

    return {
      ...store,
      favorites: updated
    };
  }

  if (action.type === "remove-favorite") {
    const updated = store.favorites.filter(
      fav => !(fav.id === action.payload.id && fav.category === action.payload.category)
    );
    localStorage.setItem("favorites", JSON.stringify(updated));

    return {
      ...store,
      favorites: updated
    };
  }

  return store; 
}
