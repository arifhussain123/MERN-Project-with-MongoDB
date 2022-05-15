import React from "react";
import picture from "../asst/comouter (2).svg";
const Login = () => {
  return (
    <section className="signup">
      <div className="Left-Indent">
        <figure>
          <img className="fontPicture" src={picture} alt="picture" />
        </figure>
        <div>
          <a href="Signup"> Create new Account</a>
        </div>
      </div>
      <div className="  ">
        <form>
          <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Your email"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="Your password"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LogIn
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
