const app = require("express").Router()
const User = require("../model/User")
const Product = require("../model/Product")
const Order = require("../model/Order")
const Cart = require("../model/Cart")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")



app.post("/register", (req, res) => {

    const { username, email, password } = req.body
    if (!username) return res.status(400).json({ mess: "username is require" })
    if (!email) return res.status(400).json({ mess: "email is require" })
    if (!password) return res.status(400).json({ mess: "password is require" })
    User.findOne({ email }).exec((err, data) => {
        if (err) return res.status(400).json({ mess: "somthing went wrong", e: err.message })
        if (data) return res.status(400).json({ mess: "user is alerdy exist" })
        if (!data) {
            User.create({
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.PASS_SEC
                ).toString(),
            }, (err, data) => {
                if (err) return res.status(400).json({ mess: "somthing went wrong", e: err.message })
                if (data) {
                    const { password, ...other } = data._doc
                    res.status(200).json(other)

                }

            })
        }
    })

})
app.post("/login", (req, res) => {

    const { email, password } = req.body
    if (!email) return res.status(400).json({ mess: "email is require" })
    if (!password) return res.status(400).json({ mess: "password is require" })
    User.findOne({ email }).exec((err, data) => {
        if (err) return res.status(400).json({ mess: "somthing went wrong" })
        if (!data) return res.status(400).json({ mess: "user is not exist" })
        if (data) {
            let hashpass = CryptoJS.AES.decrypt(data.password, process.env.PASS_SEC);
            const originalPassword = hashpass.toString(CryptoJS.enc.Utf8);
            if (originalPassword != req.body.password) return res.status(400).json({ mess: "wrong password" })
            const token = jwt.sign({
                id: data._id,
                isAdmin: data.isAdmin,

            }, process.env.JWTPASS)

            const { password, ...others } = data._doc
            res.status(200).json({ ...others, token })


        }
    })
})




module.exports = app