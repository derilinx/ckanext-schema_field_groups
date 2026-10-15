$("#groupTab .nav-pills button:first").addClass("active");
$("#groupTab .tab-pane:first").addClass("active show");

// The tab panes hide the Markdown help link that opened a popover, so it
// can't be toggled closed. Close any open popover when changing category,
// clicking elsewhere, or pressing Escape.
function hideGroupPopovers() {
  $('#groupTab [data-bs-toggle="popover"]').popover('hide');
}

$(document).on('click', function(e) {
  if (!$(e.target).closest('#groupTab [data-bs-toggle="popover"], .popover').length) {
    hideGroupPopovers();
  }
});

$(document).on('keydown', function(e) {
  if (e.key === 'Escape') {
    hideGroupPopovers();
  }
});

$('#groupTab .nav-pills > button').on('click', hideGroupPopovers);

// Show Previous/Next only when there is a category in that direction
function updateCategoryNavigation() {
  var $active = $('#groupTab .nav-pills > .active');
  $('#previous-tab').prop('hidden', $active.prev('button').length == 0);
  $('#next-tab').toggle($active.next('button').length > 0);
}

// move forward
$("#next-tab").on('click', function(e) {
  $('#groupTab .nav-pills > .active').next('button').trigger('click')
  e.preventDefault();
  return false;
});

// move back
$("#previous-tab").on('click', function(e) {
  $('#groupTab .nav-pills > .active').prev('button').trigger('click')
  e.preventDefault();
  return false;
});

$('#groupTab .nav-pills > button').on('shown.bs.tab', updateCategoryNavigation);
updateCategoryNavigation();

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
