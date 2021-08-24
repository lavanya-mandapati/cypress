describe("rendering the first page",()=>{
    Cypress.config("waitAfterEachCommand", 2000)
    it('opening localhost', (done) => {

        cy.visit("http://localhost:3005/")
        setTimeout(done, 2000)
     
    })
    it('Enter on your location', (done) => {

        cy.get('[data-testid = input1inselect]').click()
        setTimeout(done, 2000)
    
    })
    it('Select Hyderabad', (done) => {

        cy.get('[data-testid = input1inselect]').contains("Hyderabad,Telangana").click()
        setTimeout(done, 2000)
    })
    it('click on next',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click();
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
    it('click on input box',(done)=>{
        cy.get('[data-testid = input1inselect]').click();
        setTimeout(done, 2000)
    })
    it('click on ux/ui designer',(done)=>{
        cy.get('[data-testid = input1inselect]').contains("UI/UX Designer").click()
        setTimeout(done, 2000)
    })
    it('click on input box',(done)=>{
        cy.get('[data-testid = input1inselect]').click();
        setTimeout(done, 2000)
    })
    it('click on ux/ui designer',(done)=>{
        cy.get('[data-testid = input1inselect]').contains("Product Designer").click()
        setTimeout(done, 2000)
    })
    it('click on finish',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click()
        setTimeout(done, 2000)
    })
})
describe("rendering showjobs page and click on card",()=>{
    it('click on card',(done)=>{
        cy.get('[data-testid = cardcontentinjobcard]').children().get('[data-testid = rolenameinjobcard]').contains("User Experience Designer").click()
        setTimeout(done, 2000)
   })
})
describe("save and apply buttons",()=>{
    Cypress.config("waitAfterEachCommand", 2000)
    it('save job',(done)=>{
        cy.get('[data-testid=button]').click()
        setTimeout(done, 2000)
    })
    it('unsave job',(done)=>{
        cy.get('[data-testid=button]').click()
        setTimeout(done, 2000)
    })
    it('Apply job',(done)=>{
        cy.get('[data-testid=Applybutton]').click()
        setTimeout(done, 2000)
    })
    it('unApply job',(done)=>{
        cy.get('[data-testid=Applybutton]').click()
        setTimeout(done, 2000)
    })
})
describe("Green commute Routes",()=>{
    it('Green Commmute Route',(done)=>{
        cy.get('#b').click()
        setTimeout(done, 2000)
    })
    it("click on bus",(done)=>{

        cy.get("#simple-tab-1").click()
        setTimeout(done, 2000)
    })
    it("click on car",(done)=>{

        cy.get("#simple-tab-2").click()
        setTimeout(done, 2000)
    })
    it("click on bicycle",(done)=>{

        cy.get("#simple-tab-3").click()
        setTimeout(done, 2000)
    })

})
describe("rendering filter",()=>{
    it("filtering the jobs",(done)=>{
        cy.get("#filter").click()
        setTimeout(done, 2000)
    })
    it("filter by full time",(done)=>{
        cy.get('label').contains("Full - Time").click()
        setTimeout(done, 2000)
    })
    it("apply filter full time",(done)=>{
        cy.get('[data-testid=buttons]').children().contains('Apply').click()
        setTimeout(done, 2000)
    })
})
/*describe("renders the home page", () => {
    Cypress.config("waitAfterEachCommand", 2000)


    it('opening localhost', (done) => {

        cy.visit("http://localhost:3005/")
     
    })
    it('Enter on your location', (done) => {

        cy.get('[data-testid = input1inselect]').click()
    })
    it('Select Hyderabad', (done) => {

        cy.get('[data-testid = input1inselect]').contains("Hyderabad,Telangana").click()
    })
    it('click on next',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click();
    })
    it('Enter your job location', (done) => {

        cy.get('[data-testid=input1inselect]').click()
    })
    it('Select Hyderabad', (done) => {

        cy.get('[data-testid = input1inselect]').contains("Hyderabad").click()
    })
    it('click on next',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click();
    })
    it('click on input box',(done)=>{
        cy.get('[data-testid = input1inselect]').click();
    })
    it('click on ux/ui designer',(done)=>{
        cy.get('[data-testid = input1inselect]').contains("UI/UX Designer").click()
    })
    it('click on input box',(done)=>{
        cy.get('[data-testid = input1inselect]').click();
    })
    it('click on ux/ui designer',(done)=>{
        cy.get('[data-testid = input1inselect]').contains("Product Designer").click()
    })
    it('click on finish',(done)=>{
        cy.get('[data-testid=skipincustomstepper]').click()
    })
    it('click on card',(done)=>{
         cy.get('[data-testid = cardcontentinjobcard]').children().get('[data-testid = rolenameinjobcard]').contains("User Experience Designer").click()
    })
    it('save job',(done)=>{
        cy.get('[data-testid=button]').click()
    })
    it('unsave job',(done)=>{
        cy.get('[data-testid=button]').click()
    })
    it('Apply job',(done)=>{
        cy.get('[data-testid=Applybutton]').click()
    })
    it('unApply job',(done)=>{
        cy.get('[data-testid=Applybutton]').click()
    })
    it('Green Commmute Route',(done)=>{
        cy.get('#b').click()
    })
    it("click on bus",(done)=>{

        cy.get("#simple-tab-1").click()
    })
    it("click on car",(done)=>{

        cy.get("#simple-tab-2").click()
    })
    it("click on bicycle",(done)=>{

        cy.get("#simple-tab-3").click()
    })
    it("filtering the jobs",(done)=>{
        cy.get("#filter").click()
    })
    it("filter by full time",(done)=>{
        cy.get('label').contains("Full - Time").click()
    })
    it("apply filter full time",(done)=>{
        cy.get('[data-testid=buttons]').children().contains('Apply').click()
    })
})
*/