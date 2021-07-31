const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const User = require("../../model/user_model/user_model")

// Login Session controller
router.post('/', (req, res) => {

    User.findByEmail(req.body.email)
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password_digest)) {
                req.session.userId = user.id
            } else {
                res.status(401).json({error: "No such user found"})
            }

            res.json(req.session)
        })
    //username and passwrod - lookup and return if passwords match
    // if match set session to:
    req.session.userId = 2 /*  remove hardcoded value when the check user password is complete */
    res.json(req.session) // returns the session itself
})

// Logout Session controller
router.delete('/', (req, res) => {
    req.session.destroy()
    res.json({})
})

// only for testing
router.get('/', (req,res) => {
    res.json(req.session)
})

module.exports = router