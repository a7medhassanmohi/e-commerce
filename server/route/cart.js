const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")



app.post("/creatcart", (req, res) => {
    const { userId, product } = req.body
    if (!userId) return res.status(400).json({ mess: "userId is require" })

    Cart.create({
        userId,
        product
    }, (err, data) => {
        if (err) return res.status(400).json({ mess: "somthing went wrong with cart", e: err.message })
        if (data) {
            return res.status(200).json(data)
        }
    })
})

// ....................................
app.put("/updatecart/:id", (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, { new: true }, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in updated cart", e: err.message })

        res.status(200).json(data)

    })
})
app.delete("/deletecart/:id", (req, res) => {
    Cart.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in delet cart", e: err.message })

        res.status(200).json(data)

    })
})
app.get("/getcart", (req, res) => {
    Cart.find().populate("userId").populate({ path: "product.productId" }).exec((err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in get cart", e: err.message })
        if (data) {
            res.status(200).json(data)
        }
    })
})



module.exports = app