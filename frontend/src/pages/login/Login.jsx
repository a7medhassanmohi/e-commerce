import React, { useState } from "react";
import "./login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const notify = (e) => {
    toast(e, {
      toastId: "mohi",
    });
  };
  const [emailData, setemailData] = useState({
    value: "",
    err: "",
  });
  const [passwordData, setpasswordData] = useState({
    value: "",
    err: "",
  });
  let formData = {
    email: "",
    password: "",
  };
  let formDone = false;
  const inputChange = (e) => {
    if (e.target.name == "email") {
      setemailData({
        ...emailData,
        value: e.target.value,
      });
    }
    if (e.target.name == "password") {
      setpasswordData({
        ...passwordData,
        value: e.target.value,
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();

    if (formDone) {
      formData = {
        ...formData,

        email: emailData.value,
        password: passwordData.value,
      };
      dispatch(login(formData, notify, navigate));
    }
  };
  const validateForm = () => {
    if (!emailData.value) {
      setemailData({
        ...emailData,
        err: "please enter  your email",
      });
      formDone = false;
    } else {
      setemailData({
        ...emailData,
        err: "",
      });
      formDone = true;
    }
    if (!passwordData.value) {
      setpasswordData({
        ...passwordData,
        err: "please enter  your password",
      });
      formDone = false;
    } else {
      setpasswordData({
        ...passwordData,
        err: "",
      });
      formDone = true;
    }
    if (!emailData.value || !passwordData.value) {
      formDone = false;
    }
  };
  if (auth.authanticate) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="login">
      <h4>Login</h4>
      <div className="container_">
        <div className="logincontent">
          <div className="logincontent_">
            <h5>login</h5>
            <p>If you have an account with us, please log in.</p>
            <form action="" onSubmit={onSubmit}>
              <div className="inputgroup">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  placeholder="ENTER EMAIL"
                  name="email"
                  onChange={inputChange}
                />
                <span>{emailData.err}</span>
              </div>
              <div className="inputgroup">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  placeholder="ENTER PASSWORD"
                  name="password"
                  onChange={inputChange}
                />
                <span>{passwordData.err}</span>
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
        <div className="registercontent">
          <div className="registercontent__">
            <h5>NEW CUSTOMER</h5>
            <p>
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
            <button onClick={() => navigate("/signup")}>
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
