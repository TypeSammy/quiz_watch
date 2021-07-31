const express = require("express")
const router = express.Router()
const User = require("../../model/user_model/user_model");
const validateUser = require("../../middlewares/validation/validate_user");



router.post('/', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  //const { name, email, password } = req.body;

  User.create(name, email, password)
    .then(user => { // variable "user" here ends up as whatever is the last thing returned
      // from the "promise chain" in the `User.create` method
      res.json({
        user: user,
        message: 'created user successfully'
      })
    });
})

module.exports = router;