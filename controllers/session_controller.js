const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const User = require("../model/user_model")
// const validateLogin = require("../../middlewares/validation/validate_user")

// Login Session controller
router.post('/', (req, res) => {
    User.findByEmail(req.body.email)
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password_digest)) {
                req.session.userId = user.id
                console.log(req.session.userId)
                res.json({"message":"Login Successful"})
            } else {
                res.status(401).json({error: "No such user found"})
            }
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
if ( !req.session ) {
    console.log("No one is logged in")
    res.json({"message":"No one is logged in"})
} else {
    res.json(req.session) } 
})

module.exports = router