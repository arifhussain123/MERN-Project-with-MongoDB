import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//
// import picture from "../asst/comouter (2).svg";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassowrd: "",
  });
  // console.log("click button  ==>" + user);

  let name, value;

  const handleInputs = (e) => {
    console.log("handleInputs  ==>" + e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // console.log("click button  ==>" + handleInputs);
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession, password, cpassowrd } = user;
    const res = await fetch("./register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        profession,
        password,
        cpassowrd,
      }),
    });

    const data = await res.json();
    console.log("Push data on Button" + data);

    if (data.status === 422 || !data) {
      window.alert("Invalied Registration");
      console.log("Invalied Registration");
    } else {
      window.alert("Registration Successfuly");
      console.log(" Registration Successfuly");
      history.pushState("login");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="  ">
          <form method="POST">
            <div className="form-group1">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="text"
                name="name"
                className="form-control"
                id="Name "
                aria-describedby="emailHelp"
                placeholder="Your Name"
                autoComplete="off"
                value={user.name}
                ID="Name"
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Your email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="number"
                name="phone"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
                placeholder="Your Phone  "
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="text"
                name="profession"
                className="form-control"
                id="profession"
                aria-describedby="emailHelp"
                placeholder="Your Profession"
                required
                autoComplete="off"
                value={user.profession}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                aria-describedby="emailHelp"
                placeholder="Your password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="password"
                name="cpassword"
                className="form-control"
                id="cpassword"
                aria-describedby="emailHelp"
                placeholder="Confirm password"
                required
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={PostData}
            >
              Register
            </button>
          </form>
        </div>

        <div className="Left-Indent">
          {/* <figure>
            <img className="fontPicture" src={picture} alt="picture" />
          </figure> */}
          <div>
            <a href="login"> I am already Register</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
