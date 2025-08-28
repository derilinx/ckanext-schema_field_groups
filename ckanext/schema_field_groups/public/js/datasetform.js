$("#groupTab .nav-pills button:first").addClass("active");
$("#groupTab .tab-pane:first").addClass("active show");

// move forward
$("#next-tab").on('click', function(e) {
  $('#groupTab .nav-pills > .active').next('button').trigger('click')
  // is there another one? if not, swap buttons
  if ($('#groupTab .nav-pills > .active').next('button').length == 0) {
    //$('#next-tab+button').show();
    $('#next-tab').hide();
  }
  e.preventDefault();
  return false;
});

const errorTitle = ckan.i18n._("This section has a validation error");
$('#groupTab .tab-pane:has(.error)').each((ix, elt) =>
    $(`[aria-controls="${elt.id}"]`).addClass('error').attr('title', errorTitle));

const title = ckan.i18n._("This section has a required field");
$('#groupTab .tab-pane:has(.control-required)').each((ix, elt) =>
    $(`[aria-controls="${elt.id}"]`).append(' <span title="' + title +'" class="control-required">*</span>'));


// hide initially
//$('#next-tab+button').hide();

// note, uncomment the #next-tab+button selectors to hide the submit button till you've
// hit the last tab of schema items.
