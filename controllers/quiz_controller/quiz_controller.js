const express = require('express')
const router = express.Router();
const Flashcards = require("../../model/quiz_model/quiz_model")

// router.get('/', (req,res) =>{
//   Flashcard.flashcardsForUser(req.session.userId)

// })

router.get('/', (req,res) => {
  Flashcards.flashcardsDue(req.session.userId)
  .then(quiz => res.json(quiz))
})

router.get('/all', (req,res) => {
  Flashcards.flashcardsForUser(req.session.userId)
  .then(quiz => res.json(quiz))
})

router.patch('/', (req,res) => {
  Flashcards.updateFlashcardReminder(req.body.timestamp, req.body.id)
  return res.json({
    message: 'edited flashcard successfully'
  })
})

module.exports = router
