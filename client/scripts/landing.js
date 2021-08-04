const landingPage = document.querySelector("#landing-page")

const LandingPage = (() => {
  function renderLandingPage() {
    document.querySelector("#landing-page").innerHTML = `
      <section id="main-strip" class="main-strip">
        <div class="main-copy">
          <h1>Lorem Ipsum Dolor Sit</h1>
          <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <a class="button" onClick="LandingPage.getStarted(event)">Get Started</a>
        </div>
        <div class="main-img">
          <img src="./assets/character 16 crop.svg" alt="two people studying">
        </div>
      </section>
      <section class="second-strip">
        <h2>Tempor incidindunt ut labore?</h2>
        <ul>
          <div>
            <li class="material-icons check_circle">check_circle</li>
            <li>Sit amet, cons</li>
          </div>
          <div>
            <li class="material-icons check_circle">check_circle</li>
            <li>Sit amet, cons</li>
          </div>
          <div>
            <li class="material-icons check_circle">check_circle</li>
            <li>Sit amet, cons</li>
          </div>
        </ul>
      </section>
      <section class="third-strip">
        <div>
          <img src="./assets/character 18.svg" alt="guy studying">
        </div>
        <div>
          <h2>Tempor incididunt ut labore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </section>
    `
  }
  landingPage.classList.toggle("hide")
  renderLandingPage()
  function getStarted(event) {
    if (!(state.logInStatus)) {
      event.preventDefault()
      login.classList.toggle("hide")
    } else {
      landingPage.classList.toggle("hide")
      categoryHeader.classList.toggle("hide")
    }
  }
  return {
    getStarted: getStarted
  }
})()