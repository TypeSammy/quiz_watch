const login = document.querySelector("#login")
const signup = document.querySelector("#signup")

function renderSignup() {
  const signupBox = document.querySelector("#signup")
  signupBox.classList.remove("hide")
  signupBox.innerHTML = `
    <div class="signup-container">
      <h2>Signup</h2>
      <form id="sign-up-form" action="/" method="POST">
        <fieldset>
          <input type="text" name="name" placeholder="Username">
        </fieldset>
        <fieldset>
          <input type="text" name="email" placeholder="Email">
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="Password">
        </fieldset>
        <button>Sign up</button>
      </form>
      <span class="material-icons signup" onClick="render('signup')">close</span>
    </div>
  `
}
renderSignup()
signup.classList.toggle("hide")

function renderLogin() {
  const signupBox = document.querySelector("#login")
  signupBox.classList.remove("hide")
  signupBox.innerHTML = `
    <div class="login-container">
      <h2>Login</h2>
      <form id="login-up-form" action="/" method="POST">
        <fieldset>
          <input type="text" name="name" placeholder="Username">
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="Password">
        </fieldset>
        <button>Login</button>
      </form>
      <span class="material-icons login" onClick="render('login')">close</span>
    </div>
  `
}
renderLogin()
login.classList.toggle("hide")

function render(component) {
  if (component === "signup") {
    signup.classList.toggle("hide")
  } else if (component === "login") {
    login.classList.toggle("hide")
  }
}