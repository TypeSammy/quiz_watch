const login = document.querySelector("#login")
const signup = document.querySelector("#signup")

const LoginSignup = (() => {
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
          <button onClick="createUser(event)">Sign up</button>
          <p id="errors"></p>
        </form>
        <span class="material-icons signup" onClick="LoginSignup.hide('signup')">close</span>
      </div>
    `
  }
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
        <span class="material-icons login" onClick="LoginSignup.hide('login')">close</span>
      </div>
    `
  }
  renderSignup()
  renderLogin()
  signup.classList.toggle("hide")
  login.classList.toggle("hide")

  function hide(component) {
    if (component === "signup") {
      signup.classList.toggle("hide")
    } else if (component === "login") {
      login.classList.toggle("hide")
    }
  }

  return {
    hide: hide
  }

})()


function createUser(event) {
  event.preventDefault();
  const form = event.target
  const data = Object.fromEntries(new FormData(signUpForm));

  axios.post('/api/users', data)
    .then(successResponse => window.location = '/')
    .catch(errorResponse => {
      console.log(errorResponse);
      document.querySelector('#errors')
        .innerHTML = errorResponse.response.data.message;
    });
}

