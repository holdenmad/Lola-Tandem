import React, { useEffect, useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleChange = (event) => {
    event.persist();
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    login(event, formState);
  };

  // LOGIN METHOD
  const login = async (event, values) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values }),
    };

    const result = await fetch(
      "http://localhost:5000/users/login", requestOptions
    );

    const token = await result.json();
    console.log(token); 
    //store the token in the context and next time something requires it then we send the token
    //every time we want to have a logged in state we need to add it to the header
    //if the token is set, then show everything else, if it's not set show the login page

    // .then((res) => res.json())
    // .then(data => setFormState({...values}))
    // .catch((error) => {
    //   console.error("Error:", error);
  };

  

  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            {/* <%- include ('./partials/messages') %> */}
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={handleChange}
                  id="email"
                  name="email"
                  value={formState.email}
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={handleChange}
                  id="password"
                  name="password"
                  value={formState.password}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-success btn-block"
              >
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <a href="/users/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
