import React from "react";


const Welcome = () => {
  return (
    <div className="background">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center">
            <h1>Lola
              <i className="far fa-comments fa-2x"></i>
            </h1>
            <p>Create an account or login</p>
            <a
              href="/users/register"
              className="btn btn-success btn-block mb-2"
            >
              Register
            </a>
            <a href="/users/login" className="btn btn-secondary btn-block">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
