const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")



app.post("/creatorder", (req, res) => {

    const { userId, product, amount, address } = req.body
    if (!userId) return res.status(400).json({ mess: "userId is require" })
    if (!amount) return res.status(400).json({ mess: "amount is require" })
    if (!address) return res.status(400).json({ mess: "address is require" })

    Order.create({
        userId,
        product,
        amount,
        address
    }, (err, data) => {
        if (err) return res.status(400).json({ mess: "somthing went wrong with order", e: err.message })
        if (data) {
            return res.status(200).json(data)
        }
    })

})
app.put("/updateorder/:id", (req, res) => {
    Order.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, { new: true }, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in updated order", e: err.message })

        res.status(200).json(data)

    })
})
app.delete("/deleteorder/:id", (req, res) => {
    Order.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in delet order", e: err.message })

        res.status(200).json(data)

    })
})
app.get("/getorder", (req, res) => {
    Order.find().select("-product").exec((err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in get order", e: err.message })
        if (data) {
            res.status(200).json(data)
        }
    })
})



module.exports = app