$(document).ready(function() {
  const searchHeader = $('#search-header');
  const heroHeight = $('.hero').outerHeight();

  $(document).scroll(function(event){
    if($(this).scrollTop() > heroHeight) {
      searchHeader.show()
    } else {
      searchHeader.hide()
    }
  })
});