const allFlashcards = document.querySelector("#all-flashcards")

const Flashcards = (() => {
  function renderAllFlashcards() {
    document.querySelector("#all-flashcards").innerHTML = `
      <section class="all-questions-display-container">
        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons" onClick="EditFlashcard.render('edit')">edit</span><div class="edit" onClick="EditFlashcard.render('edit')">Edit</div>
          </div>
        </div>

        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons">edit</span><div class="edit">Edit</div>
          </div>
        </div>

        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons">edit</span><div class="edit">Edit</div>
          </div>
        </div>

        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons">edit</span><div class="edit">Edit</div>
          </div>
        </div>

        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons">edit</span><div class="edit">Edit</div>
          </div>
        </div>

        <div class="question-container">
          <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
          <div class="edit-container">
            <span class="material-icons">edit</span><div class="edit">Edit</div>
          </div>
        </div>
      </section>
  `
  }
  renderAllFlashcards()
  allFlashcards.classList.toggle("hide")

  function render() {
    Flashcard.render()
  }

  return {
    render: render
  }

})()