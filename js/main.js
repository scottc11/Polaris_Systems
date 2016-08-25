function showDescription() {
  console.log("DESCRIPION");

  $('.tab-content').each( function() {
      $(this).removeClass('active');
    }
  );

  $('#description-content').addClass('active');
}

function showSpecifications() {
  console.log("SPECIFICATIONS");

  $('.tab-content').each( function() {
      $(this).removeClass('active');
    }
  );

  $('#specifications-content').addClass('active');
}
