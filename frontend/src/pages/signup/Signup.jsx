import React, { useEffect, useState } from "react";
import "./signup.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth.action";
import { toast } from "react-toastify";

function Signup() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const notify = (e) => {
    toast(e);
  };
  const [firstNameData, setfirstNameData] = useState({
    value: "",
    err: "",
  });
  const [lastNameData, setlastNameData] = useState({
    value: "",
    err: "",
  });
  const [emailData, setemailData] = useState({
    value: "",
    err: "",
  });
  const [passwordData, setpasswordData] = useState({
    value: "",
    err: "",
  });
  let formData = {
    username: "",
    email: "",
    password: "",
  };
  let formDone = false;
  const inputChange = (e) => {
    if (e.target.name == "firstname") {
      setfirstNameData({
        ...firstNameData,
        value: e.target.value,
      });
    }
    if (e.target.name == "lastname") {
      setlastNameData({
        ...lastNameData,
        value: e.target.value,
      });
    }
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
        username: `${firstNameData.value} ${lastNameData.value}`,
        email: emailData.value,
        password: passwordData.value,
      };
      dispatch(register(formData, notify, navigate));
    }
  };

  const validateForm = () => {
    if (!firstNameData.value) {
      setfirstNameData({
        ...firstNameData,
        err: "please enter  your first name",
      });
      formDone = false;
    } else {
      setfirstNameData({
        ...firstNameData,
        err: "",
      });
      formDone = true;
    }
    if (!lastNameData.value) {
      setlastNameData({
        ...lastNameData,
        err: "please enter  your last name",
      });
      formDone = false;
    } else {
      setlastNameData({
        ...lastNameData,
        err: "",
      });
      formDone = true;
    }
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
    if (
      !firstNameData.value ||
      !lastNameData.value ||
      !emailData.value ||
      !passwordData.value
    ) {
      formDone = false;
    }
  };

  const navigate = useNavigate();
  if (auth.authanticate) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="signup">
      <div className="containerr_">
        <div className="signupcontent">
          <h5>Register</h5>
          <form action="" onSubmit={onSubmit}>
            <div className="inputgroup">
              <label htmlFor="">First Name*</label>
              <input
                type="text"
                placeholder="ENTER first name"
                name="firstname"
                onChange={inputChange}
              />
              <span>{firstNameData.err}</span>
            </div>
            <div className="inputgroup">
              <label htmlFor="">Last Name*</label>
              <input
                type="text"
                placeholder="ENTER last Name"
                name="lastname"
                onChange={inputChange}
              />
              <span>{lastNameData.err}</span>
            </div>
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
            <button>Register</button>
          </form>
          <p onClick={() => navigate("/login")}>if you have an account Login</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
