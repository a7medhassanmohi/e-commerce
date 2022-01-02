const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")



app.post("/creatproduct", (req, res) => {
    const { title, desc, img, price } = req.body
    if (!title) return res.status(400).json({ mess: "title is require" })
    if (!desc) return res.status(400).json({ mess: "desc is require" })
    if (!img) return res.status(400).json({ mess: "img is require" })
    if (!price) return res.status(400).json({ mess: "price is require" })
    Product.create({
        title,
        desc,
        img,
        price,
        categories: req.body.categories ? req.body.categories : null,
        size: req.body.size ? req.body.size : null,
        color: req.body.color ? req.body.color : null,
    }, (err, data) => {
        if (err) return res.status(400).json({ mess: "somthing went wrong with product", e: err.message })
        if (data) {
            return res.status(200).json(data)
        }
    })
})
app.put("/updateproduct/:id", (req, res) => {


    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, { new: true }, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in updated product", e: err.message })
        if (data) {
            res.status(200).json(data)
        }
    })


})
app.delete("/deleteproduct/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) return res.status(400).json({ mess: "something went wrong in delete product", e: err.message })
        if (data) {
            res.status(200).json(data)
        }
    })
})
app.get("/getproduct", (req, res) => {
    const category = req.query.cat
    const newArr = req.query.newArr
    if (!category) {

        if (!newArr) {

            Product.find().sort({ createdAt: -1 }).exec((err, data) => {
                if (err) return res.status(400).json({ mess: "something went wrong in get product", e: err.message })
                if (data) {
                    res.status(200).json(data)
                }
            })
        } else {
            Product.find().sort({ createdAt: -1 }).limit(8).exec((err, data) => {
                if (err) return res.status(400).json({ mess: "something went wrong in get product", e: err.message })
                if (data) {
                    res.status(200).json(data)
                }
            })
        }
    } else {

        Product.find({
            categories: {
                $in: [category]
            }
        }).exec((err, data) => {
            if (err) return res.status(400).json({ mess: "something went wrong in get product", e: err.message })
            if (data) {
                res.status(200).json(data)
            }
        })

    }



})


module.exports = app