const express = require('express')
const router = express.Router();
const Flashcard = require("../../model/quiz_model/quiz_model")

// router.get('/', (req,res) =>{
//   Flashcard.flashcardsForUser(req.session.userId)

// })

router.get('/', (req,res) => {
  Flashcard.flashcardsDue(req.session.userId)
  .then(quiz => res.json(quiz))
})

router.get('/all', (req,res) => {
  Flashcard.flashcardsForUser(req.session.userId)
  .then(quiz => res.json(quiz))
})


module.exports = router
