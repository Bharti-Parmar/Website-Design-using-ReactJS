import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

class footerHTML extends React.Component {
  render() {
    return  <div className="container">
    <div className="row py-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
            <h6 className="foot_header">Innovation</h6>
            <span className="foot">Expertise</span><br />
            <span className="foot">Updates</span><br />
            <span className="foot">Help</span><br />
            <span className="foot">For Enterprise</span>
        </div>
        <div className="col-lg-2">
            <h6 className="foot_header">Contact</h6>
            <span className="foot">About Us</span><br />
            <span className="foot">Updates</span><br />
            <span className="foot">Blogs</span><br />
            <span className="foot">Press</span>
        </div>
        <div className="col-lg-2">
            <h6 className="foot_header">About</h6>
            <span className="foot">About Us</span><br />
            <span className="foot">Updates</span><br />
            <span className="foot">Help</span>
        </div>
        <div className="col-lg-2">
            <h6 className="foot_header">Information</h6>
            <span className="foot">FAQ</span><br />
            <span className="foot">Terms of use</span><br />
            <span className="foot">Conatct Us</span>
        </div>
        <div className="col-lg-2">
            <h6>Mobile App</h6>
        </div>
        <div className="col-lg-1"></div>
    </div>
    
    <div className="row py-3">
        <div className="col-lg-1 col-sm-1"></div>
        <div className="col-lg-2 col-sm-2 col-xs-12">
            <a className="navbar-brand" href="#"><b><span className="text-danger">Yuvi</span>Pep</b></a>
        </div>
        <div className="col-lg-6 col-sm-6"></div>
        <div className="col-lg-2 col-sm-2 col-xs-12">
            <h6>Follow Us</h6>
            <span className="foot">Fb</span>
            <span className="foot">Tw</span>
        </div>
        <div className="col-lg-1 col-sm-1"></div>
    </div>
</div>
<hr />
<div className="container">
    <p className="text-center" style="font-size: 12px;color: #cec7c7;">&copy; Telaverge Communications Pvt. Ltd. All Right Reserved. </p>
</div>
;
  }
}

export default footerHTML;
