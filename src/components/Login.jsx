import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    let { data } = await axios.post("http://localhost:7070/login", {
      email,
      password,
    });

    if (data === "success") {
      navigate("/home");
    } else if (data === "password is not matched") {
      alert("password not matched");
    } else {
      alert("user not found");
    }

    console.log(data);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>

          <form onSubmit={handleSubmit} action="">
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

            <button className="btn btn-success w-100 rounded-0">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
