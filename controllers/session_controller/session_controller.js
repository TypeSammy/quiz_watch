const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const User = require("../../model/user_model/user_model")

// Login Session controller
router.post('/', (req, res) => {
    User.findByEmail(req.body.email)
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password_digest)) {
                req.session.isLoggedIn = true
                res.json({"message":"Login Successful"})
            } else {
                res.status(401).json({error: "No such user found"})
            }
            // window.location = "/"
        })
})

// Logout Session controller
router.delete('/', (req, res) => {
    req.session.destroy()
    res.json({})
    window.location = "/"
})

// only for testing
router.get('/', (req,res) => {
    res.json(req.session)
})

module.exports = router