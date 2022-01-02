import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Sucess() {
  const [stripToken, setstripToken] = useState(null);

  const baseUrl = "http://localhost:5000/api";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: "555555",
    },
  });
  const onToken = (token) => {
    setstripToken(token);
  };
  //
  return (
    <div>
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
      />
    </div>
  );
}

export default Sucess;
