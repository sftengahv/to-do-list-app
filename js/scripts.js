$(document).ready(function() {
 
  $('#button').on('click', function() {
    const toAdd = $('#input').val().trim();

    if (toAdd !== '') {
      $('ol').append('<li>' + toAdd + ' <button class="delete">X</button></li>');
      $('#taskInput').val('');
    }
  });

  
  $('ol').on('click', 'li', function() {
    $(this).toggleClass('strike');
  });

  
  $('ol').on('click', '.delete', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(300, function() {
      $(this).remove();
    });
  });

  
  $('ol').on('mouseenter', 'li', function() {
    $(this).find('.delete').show();
  });

  $('ol').on('mouseleave', 'li', function() {
    $(this).find('.delete').hide();
  });
  $('ol').sortable();
});