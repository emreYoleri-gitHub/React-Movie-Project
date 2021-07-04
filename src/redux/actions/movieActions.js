import axios from "axios";
export const getMovies = (keyword) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=b13dff4&s=${keyword}`)
    .then( async (response) =>
     await dispatch({ type: "GET_MOVİES", payload: response.data.Search })
    )
    .catch(err => console.log(err))
};
