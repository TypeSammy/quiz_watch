const Toggle = (() => {

  function landing() {
    landingPage.classList.toggle("hide")
  }
  function categoryHeader() {
    const categoryHeader = document.querySelector("#category-container")
    return categoryHeader.classList.toggle("hide")
  }
  function questionDisplay() {
    const questionDisplay = document.querySelector("#question-display")
    if (questionDisplay.classList.contains("hide")) {
      questionDisplay.classList.toggle("hide")
    }
    // questionDisplay.classList.toggle("hide")
    // document.querySelector("#create-card")
    // document.querySelector("#all-flashcards")
    // document.querySelector("#flashcard")
    // document.querySelector("#question-display")

  }
  function createForm() {
    const createForm = document.querySelector("#create-card")
    return createForm.classList.toggle("hide")
  }
  function editAllFlashcards() {
    const allFlashcards = document.querySelector("#all-flashcards")
    return allFlashcards.classList.toggle("hide")
  }
  function editFlashcard() {
    const flashcard = document.querySelector("#flashcard")
    return flashcard.classList.toggle("hide")
  }
  function questionAndEdit() {
    const questionDisplay = document.querySelector("#question-display")
    const createForm = document.querySelector("#create-card")
    const flashcard = document.querySelector("#flashcard")
    if (!questionDisplay.classList.contains("hide")) {
      questionDisplay.classList.toggle("hide")
    } else if (!createForm.classList.contains("hide")) {
      createForm.classList.toggle("hide")
    } else if (!flashcard.classList.contains("hide")) {
      flashcard.classList.toggle("hide")
    }
  }
  return {
    landing: landing,
    categoryHeader: categoryHeader,
    questionDisplay: questionDisplay,
    createForm: createForm,
    editAllFlashcards: editAllFlashcards,
    editFlashcard: editFlashcard,
    questionAndEdit: questionAndEdit
  }
})()