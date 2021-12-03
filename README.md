# Tests 
I have implemented scenarios listed in the task description.
I have focused on showing how to break the code, isolate methods, basically make it easy to maintain and re-use common parts.
Because of shortage of time, I am leaving the list of missing scenarios that could be implemented.

# Missing scenarios
- run Search with empty criteria
- run Search with special chars 
- run Search with long strings (to see how it fits in the search box and if it doesn't break search engine)
- run Search and then update Search criteria
- run Search and use different Filter criteria - to see if it works together returning the correct results
- use Search (on search page) which refreshes results after every char (likely to break at some point since it does live refresh)
- use Filters - mix with all filters - check returned results are correct
- use Filters and then clear them - check returned results are correct
- open Event and go back - see if we land on the correct page (list of events from previous step)
- check Events with long description, displaying special chars
- check that Events option actually works - Add to Calendar / Add to Google Calendar / See map
- tests for 'Request A New Event' - not covered in the scope of stories - also leaves a space for security tests (xss, sql injection)


# Issues
1. performance:
 - it takes quite a lot of time to load the content of the page (i.e. when I click in Featured Events / Today's Events)
2. When I open the main page, calendar (on the right) should highlight actual date (at least this is what I would expect)
3. search filter remembers previous search criteria

Steps:
- go to the main page
- put search criteria i.e. 'QA'
- when results are returned change search criteria to 'QA:'

Actual Results:
- I can see that search criteria where not updated and results with 'QA' are returned
4. search filter is not cleared when I refresh the page (by clicking Dev's School Events link) 
5. Search refreshes results after typying 1 letter
- this doesn't make sense since returned results won't be meaningful (it's common to wait for at least 3 letters)
6. Filtering - long names doesn't fit in the filter size
- i.e. Filter by organization: Anderson Collection at Stanford University overlap with dropdown expand arrow
- I would expect that title is cropped nicely like i.e. Anderson Collection...
7. Filtering box has delete icon
- this is confusing, I am not able to remove this box
8. Possible to run search on empty criteria

Steps: 
- put cursor in search box and hit enter

Actual Results:
- some events are returned but not sure what's the criteria of returning such list
9. 'Showing 0 to 7 of 7 total results' text
- I think that we should count from 1 (Showing 1-7)




