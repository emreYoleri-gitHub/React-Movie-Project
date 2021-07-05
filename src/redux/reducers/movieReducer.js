const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  let localStorageCheck = JSON.parse(localStorage.getItem("movies"));
  if (!localStorageCheck || localStorageCheck == "undefined") {
    localStorage.setItem("movies", JSON.stringify([]));
  }
  switch (action.type) {
    case "GET_MOVİES":
      localStorage.setItem("movies", JSON.stringify(action.payload));
      if (typeof action.payload == "undefined") {
        localStorage.setItem("movies", JSON.stringify([]));

        return {
          ...state,
          movies: [],
        };
      } else {
        return {
          ...state,
          movies: action.payload,
        };
      }

    default:
      return state;
  }
};
