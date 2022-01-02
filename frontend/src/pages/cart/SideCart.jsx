import React from "react";
import "./sidecart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import p1 from "../../img/p1.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeitemCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

function SideCart({ sidecart, full }) {
  const auth = useSelector((state) => state.auth);

  let navigate = useNavigate();
  let cartstate = useSelector((state) => state.cart.allcart);
  const dispatch = useDispatch();
  const onToken = (token) => {};

  return (
    <div
      className={`sidecart_ ${sidecart ? "active" : ""}`}
      style={{ width: full ? "100%" : "40%" }}
    >
      <div className="sidecart_content">
        <h5>Shopping Cart</h5>
        {cartstate.map((item, i) => {
          return (
            <div className="sidecart_item" key={item._id}>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="title_price">
                <div className="title">
                  <p>Relaxed-Fit Cotton Shirt</p>
                </div>
                <div className="price">
                  <p>item price: {item.price}</p>
                  <p>QTY: {item.qty}</p>
                  <p>total price {item.price * item.qty}$</p>
                </div>
              </div>
              <div className="delicon">
                <AiOutlineDelete
                  onClick={() => dispatch(removeitemCart(item._id, toast))}
                />
              </div>
            </div>
          );
        })}
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
        <button onClick={() => navigate("/cart")}>View Cart</button>
      </div>
    </div>
  );
}

export default SideCart;
