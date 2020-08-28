import React, {useEffect, useState} from 'react'

const Login = () => {
const [formState, setFormState] = useState({
  email: "",
  password: ""
})

useEffect(() => {
  console.log(formState);
}, [formState]);

const handleChange = (event) => {
  event.persist();
  setFormState((prevState) => {
    return { ...prevState, [event.target.name]: event.target.value };
  });
};

  // LOGIN METHOD
  const login = (event, values) => {
    event.preventDefault();
    fetch("http://localhost:5000/users/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    login(event, formState)
  };

    return (
        <div>
            <div className="row mt-5">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
        {/* <%- include ('./partials/messages') %> */}
        <form action="/users/login" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email</label>
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
            <label for="password">Password</label>
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
          <button type="submit" onClick={handleSubmit} className="btn btn-success btn-block">Login</button>
        </form>
        <p className="lead mt-4">
          No Account? <a href="/users/register">Register</a>
        </p>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Login


