import React, { useState, useRef, useEffect } from "react";
import ProductGallery from "./ProductGallery";
import { GrFormSubtract } from "react-icons/gr";
import { BsPlus } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import AddtionInfo from "../general/Accordion";
import Description from "../general/Description";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getoneProduct } from "../../redux/actions/product.action";
import { addCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";

function ProductinfoHome() {
  const [number, setnumber] = useState(1);
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.products.oneProduct);
  const { id } = useParams();
  const addTocart = (e) => {
    e.preventDefault();
    dispatch(addCart({ ...productItem, qty: number }, toast));
  };
  const increse = () => {
    setnumber((prev) => prev + 1);
  };
  const decrese = () => {
    if (number <= 1) {
      setnumber(1);
    } else {
      setnumber((prev) => prev - 1);
    }
  };
  useEffect(() => {
    dispatch(getoneProduct(id));
  });
  return (
    <div className="product_home">
      <div className="wraper">
        <div className="item gallery">
          <ProductGallery img={productItem?.img} />
        </div>
        <div className="item content">
          <div className="avalible">
            <h6>Availability :</h6>
            <p> Many in stock</p>
          </div>
          <h4 className="title">{productItem?.title}</h4>
          <h4 className="price">{productItem?.price}$</h4>
          <div className="addtocart">
            <div className="quntity">
              <div className="pluse" onClick={increse}>
                <BsPlus />
              </div>
              <div className="nigative" onClick={decrese}>
                <GrFormSubtract />
              </div>
              <div className="numb">{number}</div>
            </div>
            <button onClick={addTocart}>
              <HiOutlineShoppingBag />
              Add to Cart
            </button>
          </div>
          <Description productItem={productItem} />
          <AddtionInfo productItem={productItem} />
        </div>
      </div>
    </div>
  );
}

export default ProductinfoHome;
