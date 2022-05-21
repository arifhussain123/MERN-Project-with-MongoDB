import React from "react";
import { Image } from "../asst/index.js";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <from method="">
          <div className="row">
            <div className="col-md-4">
              <img
                src={Image.desk}
                alt="Mypic"
                className="profile-pic"
                style={{ with: "100px", height: "100px" }}
              />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>My Poject</h4>
                <h6>Web Profile </h6>
                <p className="proile-rating mt-3 mb-3">
                  Rating : <span>8/10</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    
                    <a
                      className="nav-link active "
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h2>WORK LINK</h2>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                {/* <p>SKILLS</p> */}
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            {/* <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kamal</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kamal</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </from>
      </div>
    </>
  );
};

export default About;
