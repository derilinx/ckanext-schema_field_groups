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


$(document).ready(function() {
    // Check the value of "field-license_id" when the page loads
    if ($('#field-license_id').val() !== 'notspecified') {
        $('#field-rights').prop('disabled', true);
    }

    // Also check when the value of "field-license_id" changes
    $('#field-license_id').on('change', function() {
        if ($(this).val() !== 'notspecified') {
            $('#field-rights').prop('disabled', true);
        } else {
            $('#field-rights').prop('disabled', false);
        }
    });
});
// hide initially
//$('#next-tab+button').hide();

// note, uncomment the #next-tab+button selectors to hide the submit button till you've
// hit the last tab of schema items.
