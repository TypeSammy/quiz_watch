const categoryEdit = document.querySelector("#category")

const Category = (() => {
  function renderCategoryHeader() {
    document.querySelector("#category-container").innerHTML = `
      <ul class="category-header">
        <div class="header-left">
          <li><h2>JavaScript</h2></li>
          <li class="material-icons edit" onClick="Category.render('edit')">edit</li>
          <li class="edit edit-txt" onClick="Category.render('edit')">Edit deck</li>
        </div>
        <li>1/10</li>
      </ul>
    `
  }
  renderCategoryHeader() 
  
  function render(component) {
    if (component === "edit") {
      allFlashcards.classList.toggle("hide")
      if (answerDisplay.classList.contains("hide") === false) {
        answerDisplay.classList.toggle("hide")
      } else if (questionDisplay.classList.contains("hide") === false) {
        questionDisplay.classList.toggle("hide")
      }
    }
  }

  return {
    render: render
  }

})()