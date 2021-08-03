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

// router.patch('/', (req,res) => {
//   Flashcards.updateFlashcardReminder(req.body.timestamp, req.body.id).then(quiz =>
//    res.json(
//     quiz : 'edited flashcard successfully'))
// })

router.patch('/', (req, res) => {
  console.log(req.body.timestamp)
  Flashcards.updateFlashcardReminder(req.body.timestamp, req.body.id)
  res.json({})
})





module.exports = router
