const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_MOVİES":
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

