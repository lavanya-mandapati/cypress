describe("rendering the first page",()=>{
    Cypress.config("waitAfterEachCommand", 2000)
    it('opening localhost', (done) => {

        cy.visit("http://localhost:3005/")
        setTimeout(done, 2000)
     
    })
    it('Enter on your location', (done) => {

        cy.get('[data-testid = input1inselect]').type("Tamil Nadu")
        setTimeout(done, 2000)
    
    })
    it('click on next',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click();
        setTimeout(done, 2000)
    })
    it('Tamil Nadu not present so skip',(done)=>{
        cy.get('[data-testid=finishincustomstepper]').click();
        setTimeout(done, 2000)
    })
})
describe("rendering the second page",()=>{
    Cypress.config("waitAfterEachCommand", 2000)
    it('Enter your job location', (done) => {

        cy.get('[data-testid=input1inselect]').click()
        setTimeout(done, 2000)
    })
    it('Select Hyderabad', (done) => {

        cy.get('[data-testid = input1inselect]').contains("Hyderabad").click()
        setTimeout(done, 2000)
    })
    it('click on next',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click();
        setTimeout(done, 2000)
    })
})
describe("rendering the third page",()=>{
    Cypress.config("waitAfterEachCommand", 2000)
    it('searching for full stack developer',(done)=>{
        cy.get('[data-testid = input1inselect]').type("Full Stack Developer");
       setTimeout(done, 2000)
    })

    it('full stack developer is not present so we cannot move to next page',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click()
        setTimeout(done, 2000)
    })
})