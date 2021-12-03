import homePage from '../pages/homePage';
import searchFilterPage from '../pages/searchFilterPage';
import eventDetailsPage from '../pages/eventDetailsPage';
import STRINGS_EN from '../support/strings_en.js';

describe('Search and filter', () => {
  describe('Search and filter with date1', () => {
    beforeEach(() => {
      cy.clock(Date.UTC(2021, 10, 20), ['Date']);
      homePage.openMainPage();
    });

    it('should return correct search results', () => {
      searchFilterPage.searchFor(STRINGS_EN.SEARCH_PHRASE1);
      homePage.checkNumberOfEvents(1);
    });

    it('should return correct filter results', () => {
      searchFilterPage.filterByOrg(STRINGS_EN.FILTER_PHRASE1);
      homePage.checkNumberOfEvents(4);
    });
  });

  describe('Search and filter with date2', () => {
    beforeEach(() => {
      cy.clock(Date.UTC(2021, 8, 2), ['Date']);
      homePage.openMainPage();
    });

    it('should return correct card info', () => {
      homePage.openFeaturedEvents();
      eventDetailsPage.openEventWithGivenName(STRINGS_EN.ARTICLE_NAME);
      eventDetailsPage.checkEventHasGivenLink(STRINGS_EN.ADD_TO_CALENDAR_LINK);
      eventDetailsPage.checkEventHasGivenLink(STRINGS_EN.ADD_TO_GCALENDAR_LINK);
      eventDetailsPage.checkEventAssignedToGivenType(STRINGS_EN.EVENT_TYPE_ALUMNI);
      eventDetailsPage.checkEventOrganizedBy(STRINGS_EN.ORGANIZED_BY_ART);
      eventDetailsPage.checkEventContactPerson(STRINGS_EN.CONTACTS_PERSON);
      eventDetailsPage.checkEventHasFollowingElement(STRINGS_EN.EVENT_DESCRIPTION);
    });
  });
});
