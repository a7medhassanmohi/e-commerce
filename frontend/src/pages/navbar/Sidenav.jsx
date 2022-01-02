import React, { useState } from "react";
import "./navbar.scss";
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SideCart from "../cart/SideCart";
import SidePerson from "../common/SidePerson";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidenav() {
  let navigate = useNavigate();
  const Allcart = useSelector((state) => state.cart.allcart);

  const [menuopen, setmenuopen] = useState(false);
  const [sidecart, setsidecart] = useState(false);
  const [sideperson, setsideperson] = useState(false);
  const toggelCart = (e) => {
    setsideperson(false);
    setsidecart(!sidecart);
  };
  const toggelPerson = (e) => {
    setsidecart(false);
    setsideperson(!sideperson);
  };
  return (
    <div className="sidenav">
      <div className="navwrap">
        <div className="menu">
          <BiMenuAltLeft onClick={() => setmenuopen(true)} />
        </div>
        <div className="link_logo">
          <div className="logo">
            <h5 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              E-commerce
            </h5>
          </div>
        </div>
        <div className="icons">
          <div className="item cart" onClick={(e) => toggelCart(e)}>
            <span>{Allcart.length}</span>
            <BsCart2 />
          </div>
          <div className="item setting" onClick={toggelPerson}>
            <BsPerson />
          </div>
          <div className="item">
            <GiSettingsKnobs />
          </div>
        </div>
      </div>
      <div className={menuopen ? "link active" : "link"}>
        <IoMdCloseCircle className="close" onClick={() => setmenuopen(false)} />
        <h5 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          E-commerce
        </h5>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Product
            </NavLink>
          </li>
        </ul>
      </div>
      <SideCart sidecart={sidecart} full />
      <SidePerson sideperson={sideperson} full />
    </div>
  );
}

export default Sidenav;
