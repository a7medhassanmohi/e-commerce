import React, { useEffect, useRef, useState } from "react";
import product from "../../img/product.jpg";
import { BsStarFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/cart.action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ProductItem({ item }) {
  const imgref = useRef();
  const dispatch = useDispatch();
  const addTocart = (e) => {
    e.preventDefault();
    dispatch(addCart({ ...item, qty: 1 }, toast));
  };

  return (
    <>
      <div className="item">
        <Link to={`/item/${item._id}`}>
          <div className="card_">
            <div className="img_">
              <img src={item.img} alt="" ref={imgref} />
              <div className="overlay">
                <div className="content">
                  <div className="item">
                    <BsEye />
                    <p>Quick view</p>
                  </div>
                  {/* <div className="item">
                    <BsHeart />
                    <p>You need to login</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="card_info">
              <h6 className="brand">LEVI'S</h6>
              <div className="starts">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p className="des">{item.title}</p>
              <p className="price">{item.price} EG</p>
              <button onClick={addTocart}>ADD to CART</button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductItem;
