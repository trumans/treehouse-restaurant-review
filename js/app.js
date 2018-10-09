
// Create listener for submit new restaurant
$('#addNew').on('click', function() {
  let newRestaurant = $('#newRestaurantInput').val();
  if ( newRestaurant.length ) {
    let newLI = $(`<li class='new'>${newRestaurant}</li>`);
    $('ul').append(newLI);
    $('#newRestaurantInput').val('');
  }
});

// Hide the text inside the #helpText span element.
// Create listener to show when the user's mouse passes over "How are these ranked?" text
$('#helpText span').hide();
$('#helpText').on('mouseenter mouseleave', function(event) {$('#helpText span').toggle();});

// Create listener on restaurant list to toggle between "strike" and regular font on double click.
$('ul').on('dblclick', 'li', function(event) {
  $(this).toggleClass('strike');
});

// Hide the fun facts and show their cover element
$('.funfact').hide();
$('.fact-cover').show();

// Create listener to show fun fact and hide cover
$('.fact-cover').on('click', function(event) {
  $(this).prev().show();
  $(this).hide();
});

// Wait for a moment, then hide flash message
$('#flashMessage')
  // slides the message down for 1 second
  .slideDown(1000)
  // delays the message for 2 seconds
  .delay(2000)
  // slides the message up for 1 second
  .slideUp(1000);


// Create listener for submit review
$('#submitBtn').click(function(){
  //  a. Use the val() method to get what's been entered into the restaurant name and restaurant review form input fields. Save both values to variables.
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
  $('#newRestaurant h3').text($('#restaurantNameInput').val());
  $('#newRestaurant p').text($('#restaurantReviewInput').val());
});
