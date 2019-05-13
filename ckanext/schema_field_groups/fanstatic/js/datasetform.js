$("#groupTab .nav-pills li:first").addClass("active");
$("#groupTab .tab-pane:first").addClass("active fade in");

// move forward
$("#next-tab").on('click', function(e) {
  $('.dataset-form .nav > .active').next('li').find('a').trigger('click')
  // is there another one? if not, swap buttons
  if ($('.dataset-form .nav > .active').next('li').length == 0) {
    //$('#next-tab+button').show();
    $('#next-tab').hide();
  }
  e.preventDefault();
  return false;
});

// hide initially
//$('#next-tab+button').hide();

// note, uncomment the #next-tab+button selectors to hide the submit button till you've
// hit the last tab of schema items.

// Hide if there's no group tab
if ($('#groupTab').length == 0) {
    $('#next-tab+button').hide();
}
