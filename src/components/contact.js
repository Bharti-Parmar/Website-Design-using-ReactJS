import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

class contactHTML extends React.Component {
  render() {
    return <div className="container-fluid grad1 p-2">
    <div className="row p-5">
        <div className="col-lg-5 col-sm-5 col-xs-12 text-white p-5">
            <h2><b>Our Online Courses</b></h2>
            <br />
            <h5 className="timer count-title count-number" data-to="1000" data-speed="1500"></h5>
            <h6>Happy Students</h6>
            <br />
            <h5 className="timer count-title count-number" data-to="20" data-speed="1500"></h5>
            <h6>New Enroll Everyday</h6>
            <br />
            <h5 className="timer count-title count-number" data-to="30" data-speed="1500"></h5>
            <h6>Professionals</h6>
        </div>
        <div className="col-lg-7 col-sm-7 col-xs-12">
            <div className="card p-5">
                <h2>Can't find what you're looking for?</h2>
                <p className="mt-3">Suggest a core topic so we can build a custom curriculum for you. One of our counselor will contact you. </p>
                <form className="p-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type the courses that you want" id="course">
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Choose a grade" id="grade">
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" id="email">
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Mobile Number" id="mobile">
                    </div>
                    <button type="submit" className="btn btn-primary mt-5 w-25">Submit</button>
                </form>
            </div>
        </div>
    </div>
  </div>;
  }
}

export default contactHTML;
