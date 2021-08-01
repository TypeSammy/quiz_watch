const categoryHeader = document.querySelector("#category-container")
const answerDisplay = document.querySelector("#answer-display")
const questionDisplay = document.querySelector("#question-display")
const createFlashcard = document.querySelector("#create-card")

const FlashcardsQA = (() => {
  function renderCategoryHeader() {
    document.querySelector("#category-container").innerHTML = `
      <ul class="category-header">
        <div class="header-left">
          <li><h2>JavaScript</h2></li>
          <li class="material-icons edit" onClick="FlashcardsQA.render('editCat')">edit</li>
          <li class="edit edit-txt" onClick="FlashcardsQA.render('editCat')">Edit deck</li>
          <li class="material-icons edit" onClick="FlashcardsQA.render('addCard')">add_circle</li>
          <li class="edit edit-txt" onClick="FlashcardsQA.render('createCard')"">Add card</li>
        </div>
        <li>1/10</li>
      </ul>
    `
  }
  function question() {
    document.querySelector("#question-display").innerHTML = `
      <section class="question-display-container">
        <div class="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="hint">
          <span class="material-icons">help</span><div class="hint">Hint</div>
        </div>
        <button onClick="FlashcardsQA.render('answer')">Answer</button>
      </section>
    `
  }
  function answer() {
    document.querySelector("#answer-display").innerHTML = `
      <div class="question-display-container">
        <p class="answer">Answer here</p>
        <div class="reminder">
          <p>How difficult did you find this question?</p>
          <div class="reminder-btn">
            <button class="easy-btn" onClick="FlashcardsQA.render('easy')">Easy</button>
            <button class="medium-btn" onClick="FlashcardsQA.render('medium')">Medium</button>
            <button class="hard-btn" onClick="FlashcardsQA.render('hard')">Hard</button>
          </div>
        </div>
      </div>
    `
  }
  function create() {
    document.querySelector("#create-card").innerHTML = `
        <div class="create-flashcard-container">
          <form id="create-flashcard-form" action="/" method="POST">
            <fieldset>
              <label for="question">Question:</label><br>
              <textarea name="question" cols="20" rows="5"></textarea>
            </fieldset>
            <fieldset>
              <label for="question">Hint:</label><br>
              <textarea name="hint" cols="20" rows="5"></textarea>
            </fieldset>
            <fieldset>
              <label for="question">Answer:</label><br>
              <textarea name="answer" cols="20" rows="5"></textarea>
            </fieldset>
            <button>Add</button>
          </form>
        </div>
    `
  }

  renderCategoryHeader() 
  question()
  answer()
  create()
  categoryHeader.classList.toggle("hide")
  questionDisplay.classList.toggle("hide")
  answerDisplay.classList.toggle("hide")
  createFlashcard.classList.toggle("hide")

  function render(component) {
    if (component === "editCat") {
      allFlashcards.classList.toggle("hide")
      if (answerDisplay.classList.contains("hide")) {
        answerDisplay.classList.toggle("hide")
      } else if (questionDisplay.classList.contains("hide")) {
        questionDisplay.classList.toggle("hide")
      }
    } else if (component === "createCard") {
      createFlashcard.classList.toggle("hide")
    } if (answerDisplay.classList.contains("hide")) {
      answerDisplay.classList.toggle("hide")
    } else if (questionDisplay.classList.contains("hide")) {
      questionDisplay.classList.toggle("hide")
    }
    // if statement for time buttons
    if (component === "answer") {
      questionDisplay.classList.toggle("hide")
      answerDisplay.classList.toggle("hide")
    } else if (component === "easy" || "medium" || "hard") {
      questionDisplay.classList.toggle("hide")
      answerDisplay.classList.toggle("hide")
      const time = component
      // timeFunction(time) => call on timelord's time function
    }
  }

  return {
    render: render
  }

})()
