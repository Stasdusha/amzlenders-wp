$(document).ready(function() {

  const MAX_MOBILE_WIDTH = 768;
  const OFFSET = 6

  const inputOffset = $('#search-hero').offset().top - OFFSET;
  const isMobil = $(window).width() <= MAX_MOBILE_WIDTH;
  const searchHeader = isMobil ? $('#search-button') : $('#search-header');
  const mobileSearchBlock = $('.mobile-search')


  $(document).scroll(function(event){
    if($(this).scrollTop() > inputOffset) {
      searchHeader.show()
    } else {
      searchHeader.hide()
    }
  })

  $('#search-button').click(function(){
    mobileSearchBlock.show().css('display', 'flex');
    $('.mobile-search .search__input').focus()
  })

  $('.search__close').click(hideMobileSearch)
  mobileSearchBlock.focusout(hideMobileSearch)
});

function hideMobileSearch(){
  mobileSearchBlock.hide()
}
