
HTML manipulation done using jQuery
Unobtrusive JavaScript / Progressive Enhancement

When JS is disabled the basic functionality of the page is still present
and JS dependent elements are hidden.

Elements dependent in JS are created in script tags in index.html.

List of Top Restaurants section
- Add an item to the list.
- New items are flagged as New using css with content property.
- Double-clicking on list item toggles between normal and grayed strikeout
using jQuery.toggleClass() method.
- Question-mark-in-circle icon from Google fonts
- Help message appears when mouse hovers over "help text"

Fun Facts
- Functionally, facts are hidden by a cover. Clicking the cover removes it and
displays the fact. Implemented by showing and hiding the cover and fun fact
elements at page load and clicking on cover.

Add A Review section
- Message appears for 2 seconds using slide down, slide up animation
- Inputs in this section are displayed in a second review in Recent Reviews
section


FUNCTIONALITY WITHOUT JAVASCRIPT ENABLED
- Top restaurants list appears
- Answer to How Ranked question is shown.
- Fun facts are not hidden.
- Recent Reviews show existing review.

Element that are not present
- Inputs to add new restaurant.
- Fun fact reveal buttons.
- Add A Review inputs and submit.
