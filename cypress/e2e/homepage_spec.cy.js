describe('empty spec', () => {
  beforeEach(()=> {
    cy.intercept({method:'GET', url: 'https://icanhazdadjoke.com/'} , {
        headers: {
            'Accept': 'application/json'
        },
        body: 
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
    }) 
    cy.visit('http://localhost:3000')
  }) 

  it('should be able to view the homepage and see a header, joke, and a next joke button', () => {
    cy.contains('h1', "Dad-a-base")
    cy.contains('p', "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.")
    cy.contains('button', "Next Joke!")
  });

  it('should be able to click the next joke button and see a new joke', () => {

  });

  it('should display an error message to user when a 500 error is received', () => {

  });

})