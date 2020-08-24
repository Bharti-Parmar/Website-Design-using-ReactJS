import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

class sectionHTML extends React.Component {
  render() {
    return  <div className="container">
    <div className="row p-4">
        <div className="col-lg-6 col-sm-6 col-xs-12">
            <h5 className="p-3" style="color:grey"> Showing <span className="text-dark">All </span>Courses</h5>
        </div>
        <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="form-group float-right p-3" style="width:35%">
                <select className="form-control" id="sel1">
                  <option>All</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
            </div>
        </div>
    </div>
    <div className="row px-5 pb-5">
        <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="card">
                <img className="card-img-top card_img" src="image/image4.png" alt="Card image">
                <div className="card-body">
                  <h5 className="card-title">Program For Young Enovator</h5>
                  <div className="row mt-4">
                      <div className="col-6">
                        <span className="course_type">Beginner</span>
                      </div>
                      <div className="col-6">
                        <span className="course_type float-right">10k Views</span>
                      </div>
                  </div><hr />
                  <span className="course_detail">12 Modules</span><br/>
                  <span className="course_detail">50 Sessions</span><br/>
                  <span className="course_detail">6 hours 80 mins</span><br/>
                  <i className="float-right text-primary mt-2">--></i>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="card">
                <img className="card-img-top card_img" src="image/image5.png" alt="Card image">
                <div className="card-body">
                <h5 className="card-title">Program For Young Enovator</h5>
                  <div className="row mt-4">
                    <div className="col-6">
                      <span className="course_type">Beginner</span>
                    </div>
                    <div className="col-6">
                      <span className="course_type float-right">10k Views</span>
                    </div>
                </div><hr />
                <span className="course_detail">12 Modules</span><br/>
                <span className="course_detail">50 Sessions</span><br/>
                <span className="course_detail">6 hours 80 mins</span><br/>
                <i className="float-right text-primary mt-2">--></i>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="card">
                <img className="card-img-top card_img" src="image/image6.png" alt="Card image">
                <div className="card-body">
                <h5 className="card-title">Program For Young Enovator</h5>
                  <div className="row mt-4">
                    <div className="col-6">
                      <span className="course_type">Beginner</span>
                    </div>
                    <div className="col-6">
                      <span className="course_type float-right">10k Views</span>
                    </div>
                </div><hr />
                <span className="course_detail">12 Modules</span><br/>
                <span className="course_detail">50 Sessions</span><br/>
                <span className="course_detail">6 hours 80 mins</span><br/>
                <i className="float-right text-primary mt-2">--></i>
                </div>
            </div>
        </div>
    </div>
</div>
;
  }
}

export default sectionHTML;
