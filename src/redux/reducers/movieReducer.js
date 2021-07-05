const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  let localStorageCheck = JSON.parse(localStorage.getItem("movies"));
  if (!localStorageCheck) {
    localStorage.setItem("movies", JSON.stringify([]));
  }
  console.log(action);
  switch (action.type) {
    case "GET_MOVİES":
      localStorage.setItem("movies", JSON.stringify(action.payload));

      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
