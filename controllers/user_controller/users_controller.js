
const express = require("express")
const router = express.Router()
const User = require("../../model/user_model/user_model");
// const validateSignup = require("../../middlewares/validation/validate_user"); // TODO



router.post('/', (req, res) => {
  const {username, email, password} = req.body

  User.create(username, email, password)
    .then(user => { // variable "user" here ends up as whatever is the last thing returned
      // from the "promise chain" in the `User.create` method
      res.json({
        user: user,
        message: 'created user successfully'
      })
    });
})

module.exports = router;