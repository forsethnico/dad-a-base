describe('Dad-a-base Homepage spec', () => {
  it('should be able to view the homepage and see a header, joke, and a next joke button', () => {
    cy.intercept({method:'GET', url: 'https://icanhazdadjoke.com/'} , {
      headers: {
          'Accept': 'application/json'
      },
      statusCode: 200,
      body: 
      {
        "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
      }
  })
    cy.visit('http://localhost:3000')
    cy.contains('h1', "DAD·A·BASE")
    cy.contains("My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.")
    cy.contains('button', "Next Joke!")
  });

  it('should be able to click the next joke button and see a new joke', () => {
    cy.intercept({method:'GET', url: 'https://icanhazdadjoke.com/'} , {
      headers: {
          'Accept': 'application/json'
      },
      body: 
      {
        "joke": "I've been trying to come up with a dad joke about momentum . . . but I just can't seem to get it going."
      }
  }) 
    cy.contains('button', 'Next Joke!').click()
    cy.contains('p', "I've been trying to come up with a dad joke about momentum . . . but I just can't seem to get it going.")
  });

  it('should display an error message to user when a 500 error is received', () => {
    cy.intercept({method:'GET', url: 'https://icanhazdadjoke.com/'} , {
      headers: {
          'Accept': 'application/json'
      },
      statusCode: 500,
      body: 
      {
        message: 'Something went wrong. Please try again.'
      }
  }) 
  cy.visit('http://localhost:3000')
  cy.contains('h4', 'Something went wrong. Please try again.')
  });
})