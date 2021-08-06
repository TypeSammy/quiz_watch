const Toggle = (() => {

  function landing() {
    landingPage.classList.toggle("hide")
  }

  function categoryHeader() {
    const categoryHeader = document.querySelector("#category-container")
    categoryHeader.classList.toggle("hide")
  }

  function questionDisplay() {
    const questionDisplay = document.querySelector("#question-display")
    questionDisplay.classList.toggle("hide")
  }

  function createForm() {
    const questionDisplay = document.querySelector("#question-display")
    const createForm = document.querySelector("#create-card")
    const allFlashcards = document.querySelector("#all-flashcards")
    const flashcard = document.querySelector("#flashcard")
    const cardCreatedMshh = document.querySelector("#card-created")

    if (createForm.classList.contains("hide")) {
      // if (cardCreatedMshh.clas)
      if (!questionDisplay.classList.contains("hide")) {
        questionDisplay.classList.toggle("hide")
      } else if (!allFlashcards.classList.contains("hide")) {
        allFlashcards.classList.toggle("hide")
      } else if (!flashcard.classList.contains("hide")) {
        flashcard.classList.toggle("hide")
      }
      createForm.classList.toggle("hide")
    }
  }

  function editAllFlashcards() {
    const questionDisplay = document.querySelector("#question-display")
    const createForm = document.querySelector("#create-card")
    const allFlashcards = document.querySelector("#all-flashcards")
    const flashcard = document.querySelector("#flashcard")

    if (allFlashcards.classList.contains("hide")) {
      if (!createForm.classList.contains("hide")) {
        createForm.classList.toggle("hide")
      } else if (!questionDisplay.classList.contains("hide")) {
        questionDisplay.classList.toggle("hide")
      } else if (!flashcard.classList.contains("hide")) {
        flashcard.classList.toggle("hide")
      }
      allFlashcards.classList.toggle("hide")
    }
  }

  function editAllFlashcardsOff() {
    const allFlashcards = document.querySelector("#all-flashcards")
    allFlashcards.classList.toggle("hide")
  
  }

  function editFlashcard() {
    const flashcard = document.querySelector("#flashcard")
    flashcard.classList.toggle("hide")
  }

  function resetFlashcard() {
    const questionDisplay = document.querySelector("#question-display")
    const createForm = document.querySelector("#create-card")
    const allFlashcards = document.querySelector("#all-flashcards")
    const flashcard = document.querySelector("#flashcard")

    if (questionDisplay.classList.contains("hide")) {
      if (!createForm.classList.contains("hide")) {
        createForm.classList.toggle("hide")
      } else if (!allFlashcards.classList.contains("hide")) {
        allFlashcards.classList.toggle("hide")
      } else if (!flashcard.classList.contains("hide")) {
        flashcard.classList.toggle("hide")
      }
      questionDisplay.classList.toggle("hide")
    }

  }

  return {
    landing: landing,
    categoryHeader: categoryHeader,
    questionDisplay: questionDisplay,
    createForm: createForm,
    editAllFlashcards: editAllFlashcards,
    editFlashcard: editFlashcard,
    resetFlashcard: resetFlashcard,
    editAllFlashcardsOff: editAllFlashcardsOff
  }
})()