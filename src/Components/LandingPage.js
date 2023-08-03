import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";



const LandingPage = ({user}) => {

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 col-10">
          <div className="card card_data mb-5">
            <div className="card-header">
              <h4 style={{color : "#a2a2a2"}}>Select an account</h4>
            </div>
            <div className="card-body card_body my-1">
              <ul className="navbar-nav">
                {user.map((data, ind) => (
                  <div key={ind}>
                    <Link to={`/aftab/${data.id -1}`} className="nav-link text-dark pt-0" >
                      <div className="card card_user" >
                        <div className="d-flex pb-2">
                          <img
                            src={data.profilepicture}
                            className="img_fluid"
                            alt="img"
                          />
                          <li className="nav-item pl-2 mt-2">{data.name}</li>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
