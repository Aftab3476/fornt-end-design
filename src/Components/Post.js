import React from 'react'
import { Link,useParams } from 'react-router-dom';

const Post = ({user}) => {
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
              style={{ paddingTop: "190px", paddingBottom: "261px" }}
            >
              <Link className="nav-link py-0 my-0" to="/Profile">
                <li className="nav-item view_item_list py-2 active">Profile</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/Post">
                <li className="nav-item view_item_list py-2">Post</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/Gallery">
                <li className="nav-item view_item_list py-2">Gallery</li>
              </Link>
              <Link className="nav-link py-0 my-0" to="/Todo">
                <li className="nav-item view_item_list py-2">ToDo</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 px-0">
          <div className="card view_card p-5">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Post