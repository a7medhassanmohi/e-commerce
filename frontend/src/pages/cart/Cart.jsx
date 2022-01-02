import React, { useState } from "react";
import "./cart.scss";
import product from "../../img/product.jpg";
import { MdDeleteForever } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { GrFormSubtract } from "react-icons/gr";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeAllCart, removeitemCart } from "../../redux/actions/cart.action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const [number, setnumber] = useState(0);

  const navigator = useNavigate();
  const dispatch = useDispatch();

  const Allcart = useSelector((state) => state.cart.allcart);
  const auth = useSelector((state) => state.auth);
  const increse = () => {
    setnumber((prev) => prev + 1);
  };
  const decrese = () => {
    if (number <= 0) {
      setnumber(0);
    } else {
      setnumber((prev) => prev - 1);
    }
  };
  const onToken = (token) => {};
  return (
    <div className="cart_">
      <h5>SHOPPING CART</h5>
      <div className="cart_content">
        {Allcart?.map((item) => {
          return (
            <div
              className="item"
              key={item._id}
              onClick={() => navigator(`/item/${item._id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <p className="des">{item.title}</p>
              <p className="price">{item.price}$</p>
              <div className="quntity">
                <p>qty:</p>
                <div className="numb"> {item.qty}</div>
              </div>
              <p className="totalorice">{item.qty * item.price}$</p>
              <div className="deleticon">
                <MdDeleteForever
                  onClick={() => dispatch(removeitemCart(item._id, toast))}
                />
              </div>
            </div>
          );
        })}

        <div className="btn_">
          <button onClick={() => navigator("/products")}>
            <BsChevronDoubleLeft />
            CONTINUE SHOPPING
          </button>
          <button onClick={() => dispatch(removeAllCart(toast))}>
            <MdDeleteForever />
            CLEAR SHOPPING CART
          </button>
        </div>
        <div className="checkout">
          <div className="sub item ">
            <p>SUBTOTAL</p>
            <h6>
              {Allcart.reduce((acc, it) => {
                return acc + it.price * it.qty;
              }, 0)}{" "}
              $
            </h6>
          </div>
          <div className="grand item ">
            <p>GRAND TOTAL</p>
            <h6>
              {" "}
              {Allcart.reduce((acc, it) => {
                return acc + it.price * it.qty;
              }, 0)}{" "}
              $
            </h6>
          </div>
          {auth.authanticate ? (
            <StripeCheckout
              name="Ahmed Mohi"
              image="https://pngimage.net/wp-content/uploads/2018/06/logo-shopee-png-3.png"
              billingAddress
              shippingAddress
              description="your total is 20$"
              amount={20 * 100}
              allowRememberMe
              panelLabel="your total is 20$"
              token={onToken}
              stripeKey="pk_test_51KCSDDKFKUCgtID8FpG01Z62Q0IpFQWT8ixLwKyqJgGZdJTN0mdm9BGmoANdgr4vAO74uypHPa6TD6plgB4J5gte00GQQGtw9v"
            >
              <button>Proceed to checkout</button>
            </StripeCheckout>
          ) : (
            <button onClick={() => toast.warn("you must login in")}>
              Proceed to checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
