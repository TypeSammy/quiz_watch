// const Toggle = (() => {

//   function landing() {
//     landingPage.classList.toggle("hide")
//   }

//   function categoryHeader() {
//     const categoryHeader = document.querySelector("#category-container")
//     categoryHeader.classList.toggle("hide")
//   }

//   function questionDisplay() {
//     const questionDisplay = document.querySelector("#question-display")
//     questionDisplay.classList.toggle("hide")
//   }

//   function createForm() {
//     const questionDisplay = document.querySelector("#question-display")
//     const createForm = document.querySelector("#create-card")
//     const allFlashcards = document.querySelector("#all-flashcards")
//     const flashcard = document.querySelector("#flashcard")

//     if (createForm.classList.contains("hide")) {
//       if (!questionDisplay.classList.contains("hide")) {
//         questionDisplay.classList.toggle("hide")
//       } else if (!allFlashcards.classList.contains("hide")) {
//         allFlashcards.classList.toggle("hide")
//       } else if (!flashcard.classList.contains("hide")) {
//         flashcard.classList.toggle("hide")
//       }
//       createForm.classList.toggle("hide")
//     }
//   }

//   function editAllFlashcards() {
//     const questionDisplay = document.querySelector("#question-display")
//     const createForm = document.querySelector("#create-card")
//     const allFlashcards = document.querySelector("#all-flashcards")
//     const flashcard = document.querySelector("#flashcard")

//     if (allFlashcards.classList.contains("hide")) {
//       if (!createForm.classList.contains("hide")) {
//         createForm.classList.toggle("hide")
//       } else if (!questionDisplay.classList.contains("hide")) {
//         questionDisplay.classList.toggle("hide")
//       } else if (!flashcard.classList.contains("hide")) {
//         flashcard.classList.toggle("hide")
//       }
//       allFlashcards.classList.toggle("hide")
//     }
//   }

//   function editAllFlashcardsOff() {
//     const allFlashcards = document.querySelector("#all-flashcards")
//     allFlashcards.classList.toggle("hide")

//   }

//   function editFlashcard() {
//     const flashcard = document.querySelector("#flashcard")
//     flashcard.classList.toggle("hide")
//   }

//   function resetFlashcard() {
//     const questionDisplay = document.querySelector("#question-display")
//     const createForm = document.querySelector("#create-card")
//     const allFlashcards = document.querySelector("#all-flashcards")
//     const flashcard = document.querySelector("#flashcard")

//     if (questionDisplay.classList.contains("hide")) {
//       if (!createForm.classList.contains("hide")) {
//         createForm.classList.toggle("hide")
//       } else if (!allFlashcards.classList.contains("hide")) {
//         allFlashcards.classList.toggle("hide")
//       } else if (!flashcard.classList.contains("hide")) {
//         flashcard.classList.toggle("hide")
//       }
//       questionDisplay.classList.toggle("hide")
//     }

//   }

//   return {
//     landing: landing,
//     categoryHeader: categoryHeader,
//     questionDisplay: questionDisplay,
//     createForm: createForm,
//     editAllFlashcards: editAllFlashcards,
//     editFlashcard: editFlashcard,
//     resetFlashcard: resetFlashcard,
//     editAllFlashcardsOff: editAllFlashcardsOff
//   }
// })()

const Toggles = (() => {

  function select() {
    // set variables
    const questionDisplay = document.querySelector("#question-display")
    const createFlashcard = document.querySelector("#create-card")
    const allFlashcards = document.querySelector("#all-flashcards")
    const flashcard = document.querySelector("#flashcard")
    const categoryHeader = document.querySelector("#category-container")
    const landingPage = document.querySelector("#landing-page")

    // Toggle arrays for resets 
    const allToggles = [questionDisplay, createFlashcard, allFlashcards, flashcard, categoryHeader]
    const flashcardToggles = [questionDisplay, createFlashcard, allFlashcards, flashcard]
    const flashcardsDueToggles = [questionDisplay, categoryHeader, landingPage]

    return {
      questionDisplay: questionDisplay,
      createFlashcard: createFlashcard,
      allFlashcards: allFlashcards,
      flashcard: flashcard,
      categoryHeader: categoryHeader,
      landingPage: landingPage,
      allToggles: allToggles,
      flashcardToggles: flashcardToggles,
      flashcardsDueToggles: flashcardsDueToggles
    }
  }

  // Landing page - Hides all element besides landing page items
  function reset() {
    const options = Toggles.select()
    options.allToggles.forEach(item => {
      if (!item.classList.contains("hide")) {
        item.classList.toggle("hide")
      }
    })
    if (options.landingPage.classList.contains("hide")) {
      options.landingPage.classList.toggle("hide")
    }
  }

  function resetFlashcards() {
    const options = Toggles.select()
    options.flashcardToggles.forEach(item => {
      if (!item.classList.contains("hide")) {
        item.classList.toggle("hide")
      }
    })
  }

  function displayHeader() {
    const categoryHeader = Toggles.select().categoryHeader
    categoryHeader.classList.toggle("hide")
  }

  function displayDueFlashcards() {
    const options = Toggles.select()
    options.flashcardsDueToggles.forEach(item => {
      item.classList.toggle("hide")
    })
  }

  function displayCreateFlashcard() {
    const options = Toggles.select()
    options.createFlashcard.classList.toggle("hide")
    options.categoryHeader.classList.toggle("hide")
    options.landingPage.classList.toggle("hide")
  }

  function displayEditDeck() {
    const options = Toggles.select()
    options.categoryHeader.classList.toggle("hide")
    options.landingPage.classList.toggle("hide")
    options.allFlashcards.classList.toggle("hide")
  }

  function displayFlashcard() {
    const options = Toggles.select()
    options.categoryHeader.classList.toggle("hide")
    options.landingPage.classList.toggle("hide")
    options.flashcard.classList.toggle("hide")
  }

  return {
    select: select,
    reset: reset,
    resetFlashcards: resetFlashcards,
    displayHeader: displayHeader,
    displayDueFlashcards: displayDueFlashcards,
    displayCreateFlashcard: displayCreateFlashcard,
    displayEditDeck: displayEditDeck,
    displayFlashcard: displayFlashcard
  }

})()


// THE LIST:


// landing page
// cat header
// questions
  // flashcard complete
  // no flashcard to show
// add flashcard
  // display flashcard added
    // redisplay form
// edit (flashcard list)
// edit flashcard
  // show all w/ flashcard changed message