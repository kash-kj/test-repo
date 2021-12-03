import basePage from './basePage'

const searchFilterPage = {
  searchBox: '.search__input',
  searchBtn: '.search__button',
  orgFilter: '#orgSelect',


  searchFor (text) {
    cy.get(this.searchBox).click().type(text);
    cy.get(this.searchBtn).click();
  },

  filterByOrg (text) {
    cy.get(this.orgFilter).select(text);
  },

}
export default { ...basePage, ...searchFilterPage }
