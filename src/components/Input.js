import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../redux/actions/movieActions";
import Movies from "./Movies";

const Input = ({ getMovies }) => {
  const [inpValue, setInpValue] = useState("");
  const [moviesCheck, setMoviesCheck] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    let spaceCheck = inpValue !== " " && inpValue.length > 0 ? true : false;
    if (spaceCheck) {
      await getMovies(inpValue);
      setTimeout(() => {
        setMoviesCheck(true);
      }, 2000);
    }
  };
  return (
    <div className="container ">
      <div className="row p-3">
        <div className="col-md-8">
          <form action="" onSubmit={(e) => submitHandler(e)}>
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

      {moviesCheck ? <Movies /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (keyword) => dispatch(getMovies(keyword)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
