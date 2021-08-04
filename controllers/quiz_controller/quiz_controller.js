const express = require('express')
const router = express.Router();
const Flashcards = require("../../model/quiz_model/quiz_model")

// getting flashcards for the user
router.get('/', (req,res) => {
  Flashcards
    .flashcardsDue(req.session.userId)
    .then(quiz => res.json(quiz))
})
// getting  flashcards for the user that are due
router.get('/all', (req,res) => {
  Flashcards
    .flashcardsForUser(req.session.userId)
    .then(quiz => res.json(quiz))
})


// updating flashcards
router.patch('/', (req, res) => {
  Flashcards.updateFlashcardReminder(req.body.timestamp, req.body.id)
  res.json({})
})

// creating new flashcard
router.post('/', (req,res) => {
  Flashcards
  .create(req.session.userId, 'JavaScript', req.body.question, req.body.hint, req.body.answer)
  res.json({})
})

// Deleting flashcard
router.delete('/', (req,res) => {
  Flashcards.flashcardsDelete(req.body.id)
  res.json({})
})


module.exports = router
