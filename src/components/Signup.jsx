import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    let { data } = await axios.post("http://localhost:7070/register", {
      name,
      email,
      password,
    });

    navigate("/login");

    console.log(data);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>

          <form onSubmit={handleSubmit} action="">
            <div className="mb-3">
              <label htmlFor="">
                <strong>Name</strong>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="form-control rounded-0"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <strong>Email</strong>
              </label>

              <input
                type="email"
                placeholder="Enter your Email"
                className="form-control rounded-0"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">
                <strong>Password</strong>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="form-control rounded-0"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <button className="btn btn-success w-100 rounded-0">Sign up</button>
          </form>

          <p>Already Have an Account ?</p>

          <Link
            to={"/login"}
            className="btn btn btn-default border text-decoration-none bg-light w-100 rounded-0"
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
