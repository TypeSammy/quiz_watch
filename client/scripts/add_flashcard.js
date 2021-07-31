function renderAddFlashcard() {
    document.querySelector('#page')
}


  
  function createTreasure(event) {
    event.preventDefault();
    const form = event.target
    const data = Object.fromEntries(new FormData(form));
    axios.post('/api/treasures', data)
      .then(successResponse => {
        const newTreasure = successResponse.data
        state.treasures.push(newTreasure)
      })
      .catch(errorResponse => {
        console.log(errorResponse);
        document.querySelector('#errors')
          .innerHTML = errorResponse.response.data.message;
      });
  }