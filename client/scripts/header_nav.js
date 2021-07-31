const Nav = (() => {
    function header() {
      // IF SESSIONS IS TRUE
      document.querySelector("#header-nav").innerHTML  = `
        <nav>
          <h3>Quiz Watch</h3>
          <ul>
            <div>
              <li class="material-icons flashcards" onClick="render('Nav.flashcards')">view_carousel</li>
              <li class="nav-text" onClick="render('Nav.flashcards')">Flashcards</li>
            </div>
            <div>
              <li class="material-icons notifications" onClick="render('Nav.notifications')">circle_notifications</li>
              <li class="nav-text" onClick="render('Nav.notifications')">Notifications</li>
            </div>
            <div>
              <li class="material-icons signup" onClick="render('Nav.user')">account_circle</li>
              <li class="nav-text" onClick="render('Nav.user')">Username</li>
            </div>
            <div>
              <li class="material-icons login" onClick="render('Nav.logout')">logout</li>
              <li class="nav-text" onClick="render('Nav.logout')">Logout</li>
            </div>
          </ul>
        </nav>
      `
      // IF SESSSION IS FALSE:
      // document.querySelector("#header-nav").innerHTML = `
      //   <nav>
      //     <h3>Quiz Watch</h3>
      //     <ul>
      //       <div>
      //         <li class="material-icons signup" onClick="Nav.render('signup')">account_circle</li>
      //         <li class="nav-text" onClick="Nav.render('signup')">Sign up</li>
      //       </div>
      //       <div>
      //         <li class="material-icons login" onClick="Nav.render('login')">login</li>
      //         <li class="nav-text" onClick="Nav.render('login')">Login</li>
      //       </div>
      //     </ul>
      //   </nav>
      // `
    }
  header()

  function render(component) {
    if (component === "signup") {
      signup.classList.toggle("hide")
    } else if (component === "login") {
      login.classList.toggle("hide")
    }
  }
  
  return {
    render: render
  }

})() // immediatly executing the function
