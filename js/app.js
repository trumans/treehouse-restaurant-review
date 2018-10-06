//  FOR RESTAURANT List// 1. Hide/show the text inside the #helpText span element when the user's mouse passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method)
$('#helpText').on('mouseenter mouseleave', function(event) {$('#helpText span').toggle();});

// 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button.
$('#addNew').on('click', function() {
  let newRestaurant = $('#newRestaurantInput').val();
  if ( newRestaurant.length ) {
    let newLI = $(`<li>${newRestaurant}</li>`);
    $('ul').append(newLI);
    $('#newRestaurantInput').val('');
  }
});

  // BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag.

// 3. Add the class "strike" to the restaurant name each time it's double clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
$('ul').on('dblclick', 'li', function(event) {
  $(this).toggleClass('strike');
});

//BONUS: Refactor challenge 3 using the "this" keyword.
//BONUS: Look up a jQuery method that will let you toggle the .strike class on and off.


//  FOR REVIEW SECTIONS

// 1. Show the hidden restaurant review, or use an animation method to reveal it.
$('div.review').show();

// 2. Set the title of the hidden restaurant review to a different name -- whatever you'd like.
$('div.review h3').text('Dat Dar Dog');

// 3. Change the text of the hidden restaurant review. The review should contain HTML, such as a strong tag or a span element.
$('div.review p').html('The <strong>best</strong> gator sausage New Orleans has to offer! <i>Yes!</i>');

// 4. Change the name of the app. Change *only* the text inside the span element within the h1.
$('h1 span').text('Yell!');

// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that
$('#flashMessage')
  // slides the message down for 1 second
  .slideDown(1000)
  // delays the message for 2 seconds
  .delay(2000)
  // slides the message up for 1 second
  .slideUp(1000);

// 6. Inside the click handler, create a working restaurant review form.
$('#submitBtn').click(function(){
  //  a. Use the val() method to get what's been entered into the restaurant name and restaurant review form input fields. Save both values to variables.
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
  $('#newRestaurant h3').text($('#restaurantNameInput').val());
  $('#newRestaurant p').text($('#restaurantReviewInput').val());
});
