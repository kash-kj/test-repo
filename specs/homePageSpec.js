import homePage from '../pages/homePage';

describe('Home Page tests', () => {
  describe('Tests number of events on date1', () => {
    beforeEach(() => {
      cy.clock(Date.UTC(2021, 10, 20), ['Date']);
      homePage.openMainPage();
    });

    it('should display events from given day', () => {
      homePage.openTodayEvents();
      homePage.checkNumberOfEvents(1);
    });
  });

  describe('Tests number of events on date2', () => {
    beforeEach(() => {
      cy.clock(Date.UTC(2021, 8, 2), ['Date']);
      homePage.openMainPage();
    });
    it('should display no events from given day', () => {
      homePage.openTodayEvents();
      homePage.checkNumberOfEvents(0);
    });

    it('should display events from featured', () => {
      homePage.openFeaturedEvents();
      homePage.checkNumberOfEvents(2);
    });
  });
});
