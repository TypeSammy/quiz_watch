function flashcardDOM() {
  const question = document.querySelector("#question")
  const answer = document.querySelector("#answer")
  const answerBtn = document.querySelector("#answer-btn")
  const reminderBtnContainer = document.querySelector(".reminder-btn")
  const hint = document.querySelector(".hint")
  return {question, answer, answerBtn, reminderBtnContainer, hint}
}

function grabFlashcardsDue() {
 return state.flashcardsdue

}

let currentCardIndex = null

function start() {
  let dom = flashcardDOM()
  let flashcardsDue = grabFlashcardsDue()
  document.querySelector(".start-btn").style.display = "none"
  currentCardIndex = 0
  // document.querySelector("#flashcards").style.transform = "none"
  // reminderBtnContainer.style.transform = "scale(0)"
  dom.question.style.display = "block"
  dom.hint.style.display = "flex"
  dom.answerBtn.style.display = "block"
  nextQ()
}


function nextQ() {
  let flashcardsDue = grabFlashcardsDue()
  showCard(flashcardsDue[currentCardIndex])
}

function showCard(flashcardsDue) {
  let dom = flashcardDOM()
  dom.question.innerText = flashcardsDue.question
  dom.answer.innerText = flashcardsDue.answer
  dom.answer.style.display = "none"
}

function showAnswer(flashcardsDue) {
  let dom = flashcardDOM()
  dom.answer.style.display = "block"
  dom.reminderBtnContainer.style.display = "block"

  dom.answerBtn.style.display = "none"
  dom.question.style.display = "none"
  dom.hint.style.display = "none"
}

function difficulty(lvl) {
  let dom = flashcardDOM()
  // dom object for question page
  dom.answerBtn.style.display = "block"
  dom.question.style.display = "block"
  dom.hint.style.display = "flex"

  // dom object for answer page
  dom.answer.style.display = "none"
  dom.reminderBtnContainer.style.display = "none"

  // changes the index to cycle through array
  currentCardIndex+=1
  nextQ()
}

const fakeQuestions = [
  {
    answer: "answer 1",
    answered_correctly: 0,
    answered_incorrectly: 0,
    category: "Javascript",
    difficulty: null,
    hint: "for example shrek 1 ",
    id: 1,
    question: "Question ONE",
    reminder: "2021-08-02T11:56:55.140Z",
    user_id: 1
  },
  {
    answer: "cry",
    answered_correctly: 0,
    answered_incorrectly: 0,
    category: "Javascript",
    difficulty: null,
    hint: "for example shrek 1 ",
    id: 1,
    question: "Question TWO",
    reminder: "2021-08-02T11:56:55.140Z",
    user_id: 1
  },
  {
    answer: "It don't matter",
    answered_correctly: 0,
    answered_incorrectly: 0,
    category: "Javascript",
    difficulty: null,
    hint: "for example shrek 1 ",
    id: 1,
    question: "Is Macey white on black or black on white",
    reminder: "2021-08-02T11:56:55.140Z",
    user_id: 1
  }
]