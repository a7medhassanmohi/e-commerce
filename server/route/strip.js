const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_MY)


app.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            return res.status(400).json(stripeErr);
        } else {
            return res.status(200).json(stripeRes);
        }
    })

})

module.exports = app