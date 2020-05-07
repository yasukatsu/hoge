window.onload = function() {
  /** jQueryの処理 */
  var $box3 = $('.box3');
  var $count3 = $('.count3');
  var $button = $('.button');
  var count = 1;

  $button.on('click', function() {
    $box3.toggleClass('active');
  });
  $box3.on('transitionend', function(e) {
    if (e.originalEvent.propertyName === 'width') {
      $count3.text(count++);
    }
  });

  var $box4 = $('.box4');
  var $count4 = $('.count4');
  var count = 1;

  $box4.on('transitionend', function(e){
    if (e.originalEvent.propertyName === 'width') {
      $count4.text(count++);
    }
  });
}