const categoryHeader = document.querySelector("#category-container")
const answerDisplay = document.querySelector("#answer-display")
const questionDisplay = document.querySelector("#question-display")
const createFlashcard = document.querySelector("#create-card")

const FlashcardsQA = (() => {
  // function renderCategoryHeader() {
  //   document.querySelector("#category-container").innerHTML = `

  //   `
  // }
  // function question() {
  //   document.querySelector("#question-display").innerHTML = `

  //   `
  // }
  // TODO add hints
  function answer() {
    document.querySelector("#answer-display").innerHTML = `
      <div class="question-display-container">
        <p class="answer">Answer here</p>
        <div class="reminder">
          <p>How difficult did you find this question?</p>
          <div class="reminder-btn">
            <button onClick="FlashcardsQA.difficultyBtn('easy')">Easy</button>
            <button onClick="FlashcardsQA.difficultyBtn('medium')">Medium</button>
            <button onClick="FlashcardsQA.difficultyBtn('hard')">Hard</button>
          </div>
        </div>
      </div>
    `
  }
  function create() {
    document.querySelector("#create-card").innerHTML = `
        <div class="create-flashcard-container">
          <form id="create-flashcard-form" action="/" method="POST" onSubmit="FlashcardsQA.createCard(event)">
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

  // renderCategoryHeader() 
  // question()
  answer()
  create()
  answerDisplay.classList.toggle("hide")
  createFlashcard.classList.toggle("hide")

  function answerBtn() {
    questionDisplay.classList.toggle("hide")
    answerDisplay.classList.toggle("hide")
  }

  function difficultyBtn(input) {
    if (input === "easy") {
      console.log('execute time function for easy')
    } else if (input === "medium") {
      console.log('execute time function for medium')
    } else if (input === "hard") {
      console.log('execute time function for hard')
    }
    questionDisplay.classList.toggle("hide")
    answerDisplay.classList.toggle("hide")
  }

  function createCard(event) {
    event.preventDefault();
    // const newFlashcardForm = event.target
    // const data = Object.fromEntries(new FormData(newFlashcardForm));

    // axios.post(/* TODO */, data)
    // .then(successResponse => {
    //   // TODO
    // })
    // .catch(errorResponse => {
    //   console.log(errorResponse);
    //   document.querySelector('#errors')
    //     .innerHTML = errorResponse.response.data.message;
    // });
  }

  function editCategory() {
    if (allFlashcards.classList.contains("hide")) {
      if (!(answerDisplay.classList.contains("hide"))) {
        answerDisplay.classList.toggle("hide")
      } else if (!(questionDisplay.classList.contains("hide"))) {
        questionDisplay.classList.toggle("hide")
      } else if (!(createFlashcard.classList.contains("hide"))) {
        createFlashcard.classList.toggle("hide")
      } else if (!(editFlashcard.classList.contains("hide"))) {
        editFlashcard.classList.toggle("hide")
      }
      allFlashcards.classList.toggle("hide")
    }
  }

  function createCard(id) {
    if (createFlashcard.classList.contains("hide")) {
      if (!(answerDisplay.classList.contains("hide"))) {
        answerDisplay.classList.toggle("hide")
      } else if (!(questionDisplay.classList.contains("hide"))) {
        questionDisplay.classList.toggle("hide")
      } else if (!(allFlashcards.classList.contains("hide"))) {
        allFlashcards.classList.toggle("hide")
      } else if (!(editFlashcard.classList.contains("hide"))) {
        editFlashcard.classList.toggle("hide")
      }
      createFlashcard.classList.toggle("hide")
    }
  }
  function returnFlashcads() {
    Nav.playFlashcards()
  }

  return { // this returns all functions so the onClick event listener can work
    answerBtn: answerBtn,
    difficultyBtn: difficultyBtn,
    createCard: createCard,
    editCategory: editCategory,
    createCard: createCard,
    returnFlashcads: returnFlashcads
  }

})()