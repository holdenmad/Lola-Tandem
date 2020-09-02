import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {AppContext} from "./Context/AppContext"

const Login = () => {
  const {setState, state} = useContext(AppContext)

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    login(event, formState);
    //redirect to dashboard on successful login

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
      "http://localhost:5000/users/login",
      requestOptions
    )


    const responseBody = await result.json();
    const user = {
      email: responseBody.email,
      name: responseBody.name,
      // id: ??????,
      "x-auth-token": result.headers.get("x-auth-token")
    }
    setState(prev => ({...prev,user}))
    localStorage.setItem("x-auth-token", result.headers.get("x-auth-token"))
    localStorage.setItem("id", user.id)
console.log(user)
    window.location='/dashboard'
  };

  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlhtmlFor="email">Email</label>
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
                <label htmlhtmlFor="password">Password</label>
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
              No Account? <Link to="/users/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
