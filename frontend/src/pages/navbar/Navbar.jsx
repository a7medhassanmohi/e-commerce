import React, { useState } from "react";
import "./navbar.scss";
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import SideCart from "../cart/SideCart";
import SidePerson from "../common/SidePerson";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let navigate = useNavigate();
  const [sidecart, setsidecart] = useState(false);
  const [sideperson, setsideperson] = useState(false);
  const Allcart = useSelector((state) => state.cart.allcart);

  const toggelCart = (e) => {
    setsideperson(false);
    setsidecart(!sidecart);
  };
  const toggelPerson = (e) => {
    setsidecart(false);
    setsideperson(!sideperson);
  };
  return (
    <nav className="navbar">
      <div className="navwrap">
        <div className="link_logo">
          <div className="logo" style={{ cursor: "pointer" }}>
            <h5 onClick={() => navigate("/")}>E-commerce</h5>
          </div>
          <div className="link">
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
        </div>
        <div className="icons">
          <div className="item cart" onClick={(e) => toggelCart(e)}>
            <BsCart2 />
            <span>{Allcart.length}</span>
          </div>
          <div className="item setting" onClick={toggelPerson}>
            <BsPerson />
          </div>
          <div className="item">
            <GiSettingsKnobs />
          </div>
        </div>
      </div>
      <SideCart sidecart={sidecart} />
      <SidePerson sideperson={sideperson} />
    </nav>
  );
}

export default Navbar;
