
function loadData() {

    // DOM elements
    var $searchToken = $("#position-token").val();
    var $positionResults = $("#result-positions");

    // Check value from form is coming in well
    console.log($searchToken);

    // clear out old data before new request
    $positionResults.text("");

    return false;
};


$('#form-container').submit(loadData);
