import React from "react";
import { Link, useParams } from "react-router-dom";

const ViewPage = ({ user }) => {
  console.log(user);

  let { id } = useParams();
  const curElem = user[id];
  console.log(curElem)
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3 px-0">
          <div className="card p-5 view_card1">
            <ul
              className="navbar-nav view_card2 px-3"
              style={{ paddingTop: "240px", paddingBottom: "265px" }}
            >
              <Link className="nav-link py-0 my-0" to="/profile">
                <li className="nav-item view_item_list py-2 active">Profile</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/post">
                <li className="nav-item view_item_list py-2">Post</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/gallery">
                <li className="nav-item view_item_list py-2">Gallery</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/toDo">
                <li className="nav-item view_item_list py-2">ToDo</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 px-0">
          <div className="card view_card px-5"style={{ paddingTop: "50px", paddingBottom: "100px" }}>
            <div className="row justify-content-between px-3">
              <h4 style={{ color: "#545454" }} id="profile">
                Profile
              </h4>
              <div className="dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex">
                    <img
                      src={curElem.profilepicture}
                      className="img_fluid1"
                      alt="pic"
                    />
                    <h6 className=" pl-2 pt-1" style={{ color: "#545454" }}>
                      {curElem.name}
                    </h6>
                  </div>
                </Link>
                <div
                  className="dropdown-menu mr-4"
                  style={{
                    borderRadius: "25px",
                    border: "none",
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  }}
                >
                  <div className=" p-3">
                    <div className="text-center">
                      <img
                        src={curElem.profilepicture}
                        className="img_fluid_data"
                        alt="pic"
                      />
                      <p className="pt-2 mb-0" style={{ fontWeight: "600" }}>
                        {curElem.name}
                      </p>
                      <p className="my-0" style={{ color: "#a2a2a2" }}>
                        {" "}
                        {curElem.email}
                      </p>
                      <hr className="mb-0" />
                      <h6 className="pt-2">I Don't Know</h6>
                      <hr className="mb-0" />
                      <h6 className="pt-2">I Don't Know</h6>
                      <Link to="/" className="btn btn_primary px-4 mt-2">
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ backgroundColor: "#fff" }} />
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card p-3 card_profile">
                  <div className="text-center">
                    <img
                      src={curElem.profilepicture}
                      className="img_fluid2"
                      alt="pic"
                    />
                    <h5 className="pt-3" style={{ color: "#545454" }}>
                      {curElem.name}
                    </h5>
                  </div>
                  <div className="d-flex px-0">
                    <div className="col-5">
                      <h6 className="float-right" style={{ color: "#a2a2a2" }}>
                        Username :{" "}
                      </h6>
                      <h6 className="float-right" style={{ color: "#a2a2a2" }}>
                        e-mail :{" "}
                      </h6>
                      <h6 className="float-right" style={{ color: "#a2a2a2" }}>
                        Phone :{" "}
                      </h6>
                      <h6
                        className="float-right"
                        style={{ color: "#a2a2a2", paddingTop: "25px" }}
                      >
                        Website :{" "}
                      </h6>
                    </div>
                    <div className="col-7">
                      <h5 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.username}
                      </h5>
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.email}
                      </h6>
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.phone}
                      </h6>
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.website}
                      </h6>
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "#a2a2a2" }} />
                  <h5 className="text-center" style={{ color: "#a2a2a2" }}>
                    Compnay
                  </h5>
                  <div className="d-flex px-0">
                    <div className="col-5">
                      <h6 className="float-right" style={{ color: "#a2a2a2" }}>
                        Name :{" "}
                      </h6>
                      <h6 className="float-right" style={{ color: "#a2a2a2" }}>
                        catchPhrase :{" "}
                      </h6>
                      <h6
                        className="float-right"
                        style={{ color: "#a2a2a2", paddingTop: "18px" }}
                      >
                        bs :{" "}
                      </h6>
                    </div>
                    <div className="col-7">
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.company.name}
                      </h6>
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.company.catchPhrase}
                      </h6>
                      <h6 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.company.bs}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-0">
                <div className="card p-3" style={{ border: "none" }}>
                  <h5 style={{ color: "#545454" }}>Address : </h5>
                  <div className="d-flex px-0">
                    <div className="col-4">
                      <h5 className="float-right" style={{ color: "#a2a2a2" }}>
                        Street :{" "}
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.address.street}
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-4">
                      <h5 className="float-right" style={{ color: "#a2a2a2" }}>
                        Suite :{" "}
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.address.suite}
                      </h5>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="col-4">
                      <h5 className="float-right" style={{ color: "#a2a2a2" }}>
                        City :{" "}
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.address.city}
                      </h5>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="col-4">
                      <h5 className="float-right" style={{ color: "#a2a2a2" }}>
                        Zipcode :{" "}
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5 className="pl-0" style={{ color: "#545454" }}>
                        {curElem.address.zipcode}
                      </h5>
                    </div>
                  </div>
                  <div className="pt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58945.59822891604!2d88.3803865639892!3d22.575367055522527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c719156233%3A0x696fbc623d90d6a3!2sBidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690995381564!5m2!1sen!2sin"
                      width="500"
                      height="250"
                      style={{ borderRadius: "20px", border: "none" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="d-flex float-right px-4">
                      <h6>Lat : {curElem.address.geo.lat}</h6>
                      <h6 className="pl-4">Long : {curElem.address.geo.lng}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
