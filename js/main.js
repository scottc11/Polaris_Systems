

// Products Sidebar buttons
$('.expander').on('click', function() {

  var expander = $(this);
  var widgetContent = $(this).parent().parent().children('.widget-content');


  // SHOWING THE WIDGET CONTENT
  if (widgetContent.hasClass('hidden')) {

    widgetContent.removeClass('hidden');
    expander.find('.glyphicon').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    return;
  }


  // HIDING THE WIDGET CONTENT
  if (widgetContent.hasClass('hidden') == false) {

    widgetContent.addClass('hidden');
    expander.find('.glyphicon').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    return;
  }
});

// -----------------------------------------------------------------------------------









// Show Description tab
function showDescription() {

  // iterate through each tabs content, and hide them
  $('.tab-content').each( function() {
      $(this).removeClass('active');
    }
  );

  // add an active class to the respective content tab
  $('#description-content').addClass('active');
}


//show specifications tab
function showSpecifications() {

  // iterate through each tabs content, and hide them
  $('.tab-content').each( function() {
      $(this).removeClass('active');
    }
  );

  // add an active class to the respective content tab
  $('#specifications-content').addClass('active');
}
