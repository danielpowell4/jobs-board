
function loadData() {

    // DOM elements
    var $searchToken = $("#position-token").val();



    // Check value from form is coming in well
    console.log($searchToken);

    // clear out old data before new request
    $positionResults.text("");


    return false;
};

loadData;

$('#form-container').submit(loadData);

var $positionResults = $("#result-positions");
$positionResults.text(""); // clears the positionResults... built to be called after a search button is pressed

var companySearchList = ["Accent+on+Independence", "Alpine+Banks+of+Colorado+Inc.", "Alpine+Lumber+Company", "AmWest+Control+Inc.", "Aspen+Wine+Guild", "Boecore+Inc", "Bradsby+Group", "C.B.+&+Potts+Restaurants", "CH2M+Hill", "Charles+D.+Jones+Company", "Colorado+Recovery", "Community+Language+Cooperative", "Culture+Counts", "Davey+Tree+Expert+Company", "Denver+Wholesale+Florists", "Design+Works", "Drive+Train+Industries,+Inc.", "Elward+Systems+Corp.", "Excalibur+Associates,+Inc.", "Facility+Logic", "FirstBank+Holding+Company", "Fort+Collins+Food+Cooperative", "General+Air", "GH+Phipps", "GROUND+Engineering+Consultants+Inc.", "Hazen+Research,+Inc.", "Henzel+Phelps+Construction", "IMA+Financial+Group", "Intelligent+Software+Solutions", "Lamp+Rynearson+&+Associates", "Larson+Distributing+Company", "Leevers+Supermarkets+Inc.", "Left+Hand+Brewing", "Lerch+Bates+Consultants", "Les+Schwab+Tires", "LID+Landscapes", "Lundquist+Associates+Inc.", "Mayu+Meditation+Cooperative", "McStain+Enterprises+Inc", "Merrick+&+Co", "Metcalf+Archaeological+Consultants+Inc", "Monroe+&+Newell+Engineers+Inc.", "Muller+Engineering", "MWH+Global", "Namaste+Solar", "Neenan+Archistruction", "New+Belgium+Brewing", "North+Park+Transportation+Company", "Odell+Brewing", "Ohlson+Lavoie+Collaborative", "P&L+Printing", "Payzone+Directional+Services", "PCL+Construction", "Pester+Marketing", "Pipe+Valve+&+Fitting+Company", "Polar+Field+Services", "Power+Zone", "RAM+International+(includes+C.B.+&+Potts)", "Re/Max+of+Cherry+Creek", "Ready+Talk", "RESPEC+Consulting", "RNL+Design", "Rocky+Mountain+Employee+Ownership+Center", "Roth+Distributing", "S.A.+Miro+Inc.", "San+Juan+Construction", "Stailey+Insurance", "Stoneage+Inc.", "STORserver+Inc.", "The+Group+Real+Estate+Co", "Trinidad+Benham+Corporation", "Union+Taxi+Cooperative", "Venoco+Inc.", "Vision+Care+Specialists", "Wheatridge+Pharmacy", "Wright+Water+Engineers", "Yenter+Companies+Inc.", "Zick+Business+Advisors+Inc."];

var indeedURL = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=New+Belgium&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28New+Belgium%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json'


  // set a timeout for indeed api response

    var indeedRequestTimeout = setTimeout(function(){
    $positionResults.text("failed to get wikipedia resources");
    },
    8000);

$.ajax({
    url: indeedURL,
    dataType: "jsonp",
    jsonp: "callback",
    success: function( response ) {

      var jobList = response.results; // job list is an array of objects from indeed

      //console.log(jobList);

/* --------------------------------------------------------------------
       loop through the results and place them on the job board
   -------------------------------------------------------------------- */

      var post, postTitle, postCompany, postSnippet, postLocation, postDate, postURL;

      for (var i = 0; i<jobList.length; i++){
        post = jobList[i];
        postTitle = '<h2>' + post.jobtitle + '</h2>';
        postCompany = '<h4>' + post.company + '</h4>';
        postSnippet = '<p>' + post.snippet + '</p>';
        postLocation = '<p>' + post.formattedLocationFull + '</p>';
        postDate = '<p>' + post.date + '</p>';
        postURL = '<a href="' + post.url + '"> View Posting Here </a>';

        $positionResults.append('<div class="positing-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
        }

        clearTimeout(indeedRequestTimeout); // needs to be a realistic time for all of the results...
    }
});


/* -----------------------------------------------------------------------------------------------
  * Small Names List Generator from a JSON
   ----------------------------------------------------------------------------------------------- */
/*
  * var nameList = [];
  *
  * // Requires a companyList variable that is a JSON containing a Name attribute
  *
  * for (var i = 0; i<companyList.length; i++) {
  *   var nameFixed = companyList[i].Name.replace(/ /g, '+'); // replaces space with a + in the name
  *   nameList.push(nameFixed); // adds the grammar prepped names to the nameFixed Array
  * };
  *
  * console.log(nameList); // check console to see if it worked
*/
