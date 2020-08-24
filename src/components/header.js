import React from "react";
import "../styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class headerHTML extends React.Component {
  render() {
    return (
      <div classNameName="container-fluid bg-primary">
        <h1 className="text-white pt-5 pb-3 pl-5">
          <b>ONLINE COURSES</b>
        </h1>
        <div className="card my-3 mx-5 bg-default">
          <div className="row p-4">
            <div className="col-lg-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#f3daf24a;" }}
              >
                <img
                  src="image/image.png"
                  className="card-img-top rounded-circle mx-auto"
                  alt="image1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Learn Interactively
                  </h5>
                  <p className="card-text p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card p-3" style={{ backgroundColor: "#edfcff;" }}>
                <img
                  src="image/download.png"
                  className="card-img-top rounded-circle mx-auto"
                  alt="image1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Learn Interactively</h5>
                  <p className="card-text p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#ff7fef30;" }}
              >
                <img
                  src="image/image1.jpg"
                  className="card-img-top rounded-circle mx-auto"
                  alt="image1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Learn Interactively</h5>
                  <p className="card-text p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card p-3" style={{ backgroundColor: "#edf2ff;" }}>
                <img
                  src="image/iamge2.jpg"
                  className="card-img-top rounded-circle mx-auto"
                  alt="image1"
                />
                <div className="card-body text-center text-justify">
                  <h5 className="card-title">Learn Interactively</h5>
                  <p className="card-text p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default headerHTML;
