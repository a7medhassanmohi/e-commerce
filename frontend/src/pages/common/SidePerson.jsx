import React from "react";
import "./sideperson.scss";
import { BsLock } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { logout } from "../../redux/actions/auth.action";
function SidePerson({ sideperson, full }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const logoutFn = () => {
    dispatch(logout(toast));
  };

  return (
    <div
      className={`sideperson_ ${sideperson ? "active" : ""}`}
      style={{ width: full && "50%" }}
    >
      {auth.authanticate ? (
        <div className="sidepersoncontent">
          <p>wlecome {auth.user.username} </p>
          <div className="item" onClick={logoutFn}>
            <BsLock />
            <p>Logout</p>
          </div>

          <div className="item" onClick={() => navigate("/cart")}>
            <BsCart2 />
            <p>Cart</p>
          </div>
        </div>
      ) : (
        <div className="sidepersoncontent">
          <div className="item" onClick={() => navigate("/login")}>
            <BsLock />
            <p>Sign in</p>
          </div>
          <div className="item" onClick={() => navigate("/signup")}>
            <BsPerson />
            <p>Register</p>
          </div>
          <div className="item" onClick={() => navigate("/cart")}>
            <BsCart2 />
            <p>Cart</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidePerson;
