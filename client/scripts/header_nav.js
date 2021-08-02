const Nav = (() => {
    function header() {
      if (state.logInStatus) {
        document.querySelector("#header-nav").innerHTML  = `
        <nav>
          <h3 class="quiz-watch" onClick="Nav.displayLandingPage()">Quiz Watch</h3>
          <ul>
            <div>
              <li class="material-icons flashcards" onClick="Nav.playFlashcards()">view_carousel</li>
              <li class="nav-text" onClick="Nav.playFlashcards()">Flashcards</li>
            </div>
            <div>
              <li class="material-icons notifications" onClick="render('Nav.notifications')">circle_notifications</li>
              <li class="nav-text" onClick="Nav.render('notifications')">Notifications</li>
            </div>
            <div>
              <li class="material-icons signup" onClick="render('Nav.user')">account_circle</li>
              <li class="nav-text" onClick="Nav.render('user')">Username</li>
            </div>
            <div>
              <li class="material-icons login" onClick="render('Nav.logout')">logout</li>
              <li class="nav-text" onClick="Nav.render('logout')">Logout</li>
            </div>
          </ul>
        </nav>
      `
      }
      if(!(state.logInStatus)) {
        document.querySelector("#header-nav").innerHTML = `
        <nav>
          <h3>Quiz Watch</h3>
          <ul>
            <div>
              <li class="material-icons signup" onClick="Nav.render('signup')">account_circle</li>
              <li class="nav-text" onClick="Nav.render('signup')">Sign up</li>
            </div>
            <div>
              <li class="material-icons login" onClick="Nav.render('login')">login</li>
              <li class="nav-text" onClick="Nav.render('login')">Login</li>
            </div>
          </ul>
        </nav>
      `
      }
    }


  // Calls header function 
  header()

  function render(component) {
    if (component === "signup") {
      signup.classList.toggle("hide")
    } else if (component === "login") {
      login.classList.toggle("hide")
    } else if (component === "flashcards") {
      if (categoryHeader.classList.contains("hide")) {
        landingPage.classList.toggle("hide")
        categoryHeader.classList.toggle("hide")
        questionDisplay.classList.toggle("hide")
      }
    }
  }

  function displaySignup() {
    signup.classList.toggle("hide")
  }

  function displayLogin() {
    login.classList.toggle("hide")
  }

  function playFlashcards() {
    if (questionDisplay.classList.contains("hide") && answerDisplay.classList.contains("hide")) {
      if (categoryHeader.classList.contains("hide")) {
        categoryHeader.classList.toggle("hide")
      } else if (!(createFlashcard.classList.contains("hide"))) {
        createFlashcard.classList.toggle("hide")
      } if (!(editFlashcard.classList.contains("hide"))) {
        editFlashcard.classList.toggle("hide")
      } else if (!(allFlashcards.classList.contains("hide"))) {
        allFlashcards.classList.toggle("hide")
      } else if (!(landingPage.classList.contains("hide"))) {
        landingPage.classList.toggle("hide")
      }
      questionDisplay.classList.toggle("hide")
    } 
  }

  function displayLandingPage() {
    if (landingPage.classList.contains("hide")) {
      if (!(categoryHeader.classList.contains("hide"))) {
        categoryHeader.classList.toggle("hide")
      } else if (!(createFlashcard.classList.contains("hide"))) {
        createFlashcard.classList.toggle("hide")
      } if (!(editFlashcard.classList.contains("hide"))) {
        editFlashcard.classList.toggle("hide")
      } else if (!(allFlashcards.classList.contains("hide"))) {
        allFlashcards.classList.toggle("hide")
      } else if (!(answerDisplay.classList.contains("hide"))) {
        answerDisplay.classList.toggle("hide")
      } else if (!(answerDisplay.classList.contains("hide"))) {
        answerDisplay.classList.toggle("hide")
      } else if (!(questionDisplay.classList.contains("hide"))) {
        questionDisplay.classList.toggle("hide")
      }
      landingPage.classList.toggle("hide")
    }
  }
  
  return {
    render: render,
    displaySignup: displaySignup,
    displayLogin: displayLogin.apply,
    playFlashcards: playFlashcards,
    displayLandingPage: displayLandingPage,
    header: header
  }

})()

