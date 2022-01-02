const jwt = require("jsonwebtoken")

const verfyToken = (req, res, next) => {
    const token = req.headers.token
    if (token) {
        jwt.verify(token, process.env.JWTPASS, (err, data) => {
            if (err) return res.status(400).json({ mess: "token not valid" })
            if (data) {
                req._user = data
                next()
            }
        })

    } else {
        return res.status(400).json({ mess: "you are not athorized" })
    }
}

const veryTokenandAuthrizatin = (req, res, next) => {
    verfyToken(req, res, () => {
        if (req._user._id === req.params.id || req._user.isAdmin) {
            next()
        } else {
            return res.status(400).json({ mess: "you are not allowed to do that" })
        }
    })
}
const veryTokenandAdmin = (req, res, next) => {
    verfyToken(req, res, () => {
        if (req._user.isAdmin) {
            next()
        } else {
            return res.status(400).json({ mess: "you are not allowed to do that" })
        }
    })
}

module.exports = {
    veryTokenandAdmin,
    veryTokenandAuthrizatin,
    verfyToken
}