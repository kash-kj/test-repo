const basePage = {
  baseUrl: 'https://damian-events.coursedog.com/',

  openMainPage () {
    cy.visit(`${this.baseUrl}`)
  }
}
export default basePage
