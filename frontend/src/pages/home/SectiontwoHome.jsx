import React from "react";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import "./home.scss";
import { Link } from "react-router-dom";

function SectiontwoHome() {
  return (
    <div className="sec_home_two">
      <div className="wraper">
        <div className="left_">
          <div className="item">
            <Link to="/products">
              <div className="img">
                <img src={img1} alt="" />
              </div>
            </Link>
            <Link to="/products">
              <div className="img">
                <img src={img3} alt="" />
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to="/products">
              <div className="img">
                <img src={img2} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="rigth_">
          <div className="item one">
            <div className="img">
              <Link to="/products">
                <img src={img4} alt="" />
              </Link>
            </div>

            <div className="img">
              <Link to="/products">
                <img src={img3} alt="" />
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <Link to="/products">
                <img src={img5} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectiontwoHome;
