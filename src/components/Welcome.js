import React from "react";
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <div className="background">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center cardcolor">
            <h1 className="logo">Lola
              {/* <i className="far fa-comments fa-2x"></i> */}
            </h1>
            <p>Create an account or login</p>
            <Link
              to="/users/register"
              className="btn btn-success btn-block mb-2"
            >
              Register
            </Link>
            <Link to="/users/login" className="btn btn-secondary btn-block">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
