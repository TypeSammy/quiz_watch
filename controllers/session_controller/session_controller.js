const express = require('express');

const router = express.Router();

// Login Session controller
router.post('/', (req, res) => {
    //username and passwrod - lookup and return if passwords match
    // if match set session  to:
    req.session.userId = 5
})

// Logout Session controller
router.delete('/', (req, res) => {
    req.session.userId = null
    //any other info saved to be set to null
})

router.get('/', (req,res) => {
    res.json(req.session)
})

module.exports = router