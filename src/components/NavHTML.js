import React from "react";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class NavHTML extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white">
        <div className="row w-100 p-2">
          <div className="col-lg-2 col-sm-2 col-xs-12">
            <a className="navbar-brand" href="#">
              <b>
                <span className="text-danger">Yuvi</span>Pep
              </b>
            </a>
          </div>
          <div className="col-lg-10 col-sm-10 col-xs-12">
            <div className="row">
              <ul className="navbar-nav w-100">
                <div className="col-lg-7">
                  <li className="nav-item">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                    />
                  </li>
                </div>
                <div className="col-lg-5">
                  <li className="nav-item dropdown float-lg-right float-sm-right float-xs-left">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      Account
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        SignUp
                      </a>
                      <a className="dropdown-item" href="#">
                        LogIn
                      </a>
                    </div>
                  </li>
                  <li className="nav-item float-lg-right float-sm-right float-xs-left">
                    <a className="nav-link" href="#">
                      |
                    </a>
                  </li>
                  <li className="nav-item float-lg-right float-sm-right float-xs-left">
                    <a className="nav-link" href="#">
                      Become Member
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavHTML;
