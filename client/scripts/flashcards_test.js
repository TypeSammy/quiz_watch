function flashcardDOM() {
  const question = document.querySelector("#question")
  const answer = document.querySelector("#answer")
  const answerBtn = document.querySelector("#answer-btn")
  const reminderBtnContainer = document.querySelector(".reminder-btn")
  const hint = document.querySelector(".hint")
  const displayQContainer = document.querySelector('.question-display-container')
  return {question, answer, answerBtn, reminderBtnContainer, hint, displayQContainer}
}

function grabFlashcardsDue() {
  return state.flashcardsdue
}

let currentCardIndex = null

function start() {
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
  let flashcardsDue = grabFlashcardsDue()
  showCard(flashcardsDue[currentCardIndex])
}

function showCard(flashcardsDue) {
  let dom = flashcardDOM()
  dom.displayQContainer.setAttribute("data-id", flashcardsDue.id)
  dom.question.innerText = flashcardsDue.question
  dom.answer.innerText = flashcardsDue.answer
  dom.answer.style.display = "none"
}

function showAnswer(flashcardsDue) {
  console.log('TEST 5')
  let dom = flashcardDOM()
  dom.answer.style.display = "block"
  dom.reminderBtnContainer.style.display = "block"

  dom.answerBtn.style.display = "none"
  dom.question.style.display = "none"
  dom.hint.style.display = "none"

}

function difficulty(lvl) {
  let dom = flashcardDOM()
  let cardId = dom.displayQContainer.getAttribute("data-id")
  // dom object for question page
  dom.answerBtn.style.display = "block"
  dom.question.style.display = "block"
  dom.hint.style.display = "flex"

  // dom object for answer page
  dom.answer.style.display = "none"
  dom.reminderBtnContainer.style.display = "none"
// functions to add minute or days
function addDays(date, days) {
  date.setDate(date.getDate() + days)
  return date;
}
function addMinutes(date, minutes) {
  date.setTime(date.getTime() + minutes*60000)
  return date;
}
// 
  var someDate = new Date();
  if (lvl == 'easy'){ addDays(someDate, 7) } 
    else if( lvl == 'medium') { addDays(someDate, 1) }
    else if (lvl == 'hard') { addMinutes(someDate, 1) } 

  var dd = someDate.getDate();
  var mm = someDate.getMonth() + 1;
  var y = someDate.getFullYear();
  var hour = someDate.getHours();
  var minutes = someDate.getMinutes();
  var seconds = someDate.getSeconds();

  var reminder = y + '/'+ mm + '/'+ dd + " " + hour + ":" + minutes + ":" + seconds;

  axios.patch('/api/quiz',{timestamp: reminder, id: cardId} )
   // changes the index to cycle through array
  currentCardIndex+=1
  nextQ()
}

function createNewFlashcard(question, hint, answer){
  // need to grab the data from the user submitted form
  axios.post('/api/quiz',{question: question, hint: hint, answer: answer} )
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