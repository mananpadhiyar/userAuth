import React from "react";

const Signup = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>

          <form action="">
            <div className="mb-3">
              <label htmlFor="">
                <strong>Name</strong>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="form-control rounded-0"
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
              />
            </div>

            <button className="btn btn-success w-100 rounded-0">Sign up</button>
          </form>

          <p>Already </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
