import basePage from './basePage'

const homePage = {
  vueDocsMenu: 'a[href*="https://vuejs.org"]',
  featuredEventsMenu: 'a[href*="/featured"]',
  todaysEventsMenu: 'a[href*="/today"]',
  eventCard:'.card-content',

  openTodayEvents(){
    cy.get(homePage.todaysEventsMenu).click();
  },

  openFeaturedEvents(){
    cy.get(homePage.featuredEventsMenu).click();
  },

  checkNumberOfEvents(number){
    cy.get(homePage.eventCard).should('have.length', number);
  },

}
export default { ...basePage, ...homePage }
