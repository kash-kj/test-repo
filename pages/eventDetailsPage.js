const eventDetailsPage = {
  eventDetails: 'article',
  eventType: '[data-test="event-type"]',
  eventOrganizedBy: '[data-test="organisation"]',

  openEventWithGivenName(name) {
    cy.get(this.eventDetails).contains(name).click();
  },

  checkEventHasGivenLink(name){
    cy.get(this.eventDetails).contains(name).should('have.length', 1);
  },

  checkEventAssignedToGivenType(type){
    cy.get(this.eventDetails).find(this.eventType).find('a').contains(type).should('have.length', 1);
  },

  checkEventOrganizedBy(orgName){
    cy.get(this.eventDetails).find(this.eventOrganizedBy).find('a').contains(orgName).should('have.length', 1);
  },

  checkEventContactPerson(contact){
    cy.get(this.eventDetails).find('label').parent().find('span').contains(contact).should('have.length', 1);
  },

  checkEventHasFollowingElement(element){
    cy.get('article').contains(element).should('have.length', 1); 
  },

};
export default eventDetailsPage;
