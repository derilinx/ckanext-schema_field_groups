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

    if ($('#field-high_value_dataset').val() === 'true') {
        $('input[name="applicable_legislation"]').val('http://data.europa.eu/eli/reg_impl/2023/138/oj');
    }
    $('#field-high_value_dataset').on('change', function() {
        console.log($('#field-high_value_dataset').val());
        if ($(this).val() === 'true') {
            $('input[name="applicable_legislation"]').val('http://data.europa.eu/eli/reg_impl/2023/138/oj');
        } else {
            $('input[name="applicable_legislation"]').val('');
        }
    });

});
// hide initially
//$('#next-tab+button').hide();

// note, uncomment the #next-tab+button selectors to hide the submit button till you've
// hit the last tab of schema items.
