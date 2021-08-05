function flashcardDOM() {
  const question = document.querySelector("#question")
  const answer = document.querySelector("#answer")
  const answerBtn = document.querySelector("#answer-btn")
  const reminderBtnContainer = document.querySelector(".reminder-btn")
  const hint = document.querySelector(".hint")
  const hintTxt = document.querySelector(".hint-txt")
  const displayQContainer = document.querySelector('.question-display-container')
  const finish = document.querySelector('#finished')
  return {question, answer, answerBtn, reminderBtnContainer, hint, hintTxt, displayQContainer, finish}
}

function grabFlashcardsDue() {
  console.log('TEST 1')
  return state.flashcardsdue
}

let currentCardIndex = null

function start() {
  console.log('TEST 2')
  let dom = flashcardDOM()
  // let flashcardsDue = grabFlashcardsDue()
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
  console.log('TEST 3')
  let flashcardsDue = grabFlashcardsDue()
  showCard(flashcardsDue[currentCardIndex])
}

function showCard(flashcardsDue) {
  console.log('TEST 4')
  let dom = flashcardDOM()
  dom.displayQContainer.setAttribute("data-id", flashcardsDue.id)
  dom.question.innerText = flashcardsDue.question
  dom.answer.innerText = flashcardsDue.answer
  dom.hintTxt.innerText = flashcardsDue.hint
  dom.answer.style.display = "none"
  dom.hintTxt.style.display = "none"
}

function showAnswer() {
  console.log('TEST 5')
  let dom = flashcardDOM()
  dom.answer.style.display = "block"
  dom.reminderBtnContainer.style.display = "block"

  dom.answerBtn.style.display = "none"
  dom.question.style.display = "none"
  dom.hint.style.display = "none"
}
function showHint() {
  let dom = flashcardDOM()
  dom.hintTxt.style.display = "block"
}
function hideHint() {
  let dom = flashcardDOM()
  dom.hintTxt.style.display = "none"
}

function difficulty(lvl) {
  console.log('TEST 5')
  let dom = flashcardDOM()
  let flashcardsDue = grabFlashcardsDue()
  let cardId = dom.displayQContainer.getAttribute("data-id")
  // dom object for question page
  dom.answerBtn.style.display = "block"
  dom.question.style.display = "block"
  dom.hint.style.display = "flex"

  // dom object for answer page
  dom.answer.style.display = "none"
  dom.reminderBtnContainer.style.display = "none"

  // changes the index to cycle through array
  // reminderUpdate(lvl, cardId)
  if (currentCardIndex === flashcardsDue.length-1) {
    dom.finish.style.display = "block"
    dom.answerBtn.style.display = "none"
    dom.question.style.display = "none"
    dom.hint.style.display = "none"
  } else {
    currentCardIndex+=1
    nextQ()
  }
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