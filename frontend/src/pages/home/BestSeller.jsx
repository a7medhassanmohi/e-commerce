import React, { useRef } from "react";
import product from "../../img/product.jpg";
import { BsStarFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../Products/ProductItem";
import { useNavigate } from "react-router-dom";

function BestSeller() {
  const navigate = useNavigate();
  const { newArrive } = useSelector((state) => state.products);

  return (
    <div className="best_seller">
      <div className="wraper">
        <div className="title">
          <h5>New Arrival</h5>
          <p>TOP PRODUCTS OF THIS WEEK</p>
        </div>
        <div className="product_">
          {newArrive.length > 0 ? (
            newArrive.map((item) => {
              return <ProductItem key={item._id} item={item} />;
            })
          ) : (
            <h6>no item found</h6>
          )}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
