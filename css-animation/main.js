window.onload = function() {
  /** jQueryの処理 */
  var $box = $('.box3');
  var $button = $('.button');

  $button.on('click', function() {
    $box.toggleClass('active');
  });
}