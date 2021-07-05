import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../redux/actions/movieActions";
import Movies from "./Movies";

const Input = ({ getMovies }) => {
  const [inpValue, setInpValue] = useState("");
  const [moviesCheck, setMoviesCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    let spaceCheck = inpValue.length > 0 ? true : false;
    if (spaceCheck) {
      await getMovies(inpValue);
      setLoading(true);
      setTimeout(() => {
        setMoviesCheck(true);
        setInpValue("");
      }, 2000);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-md-8 mx-auto">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Film Ara..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                required
              />
              <button className="btn btn-danger" type="submit">
                Ara
              </button>
            </div>
          </form>
        </div>
      </div>

      {moviesCheck ? (
        <Movies />
      ) : loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2> &nbsp; Yükleniyor...</h2>
          <div class="spinner-border" role="status"></div>
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (keyword) => dispatch(getMovies(keyword)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
