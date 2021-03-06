/**-----------------------------------------------------------------------------
  *
  * Globally needed indexes, DOM element selectors and such
  *
  *-----------------------------------------------------------------------------*/

// BASIC JOB LISTS
var masterList = [];
var currentList = [];
var jobList = [];

/*

                {
                    "jobtitle" : "Steve",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Asheville",
                    "state" : "NC",
                    "country" : "US",
                    "formattedLocation" : "Asheville, NC",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Tue, 19 Jan 2016 23:45:48 GMT",
                    "snippet" : "This position is responsible for maintaining all <b>New</b> <b>Belgium</b> Asheville brewery draught systems and provides local market field quality support and expertise....",
                    "url" : "http://www.indeed.com/viewjob?jk=8bf93cfe8c8dc57b&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 35.5989,
                    "longitude" : -82.54945,
                    "jobkey" : "8bf93cfe8c8dc57b",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Asheville, NC",
                    "formattedRelativeTime" : "2 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Brewer",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Philadelphia",
                    "state" : "PA",
                    "country" : "US",
                    "formattedLocation" : "Philadelphia, PA",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Mon, 18 Jan 2016 23:37:25 GMT",
                    "snippet" : "<b>New</b> <b>Belgium</b> is the industry-leader in post-production quality. Facilitate and assess the <b>New</b> <b>Belgium</b> Quality Measurement Tools:....",
                    "url" : "http://www.indeed.com/viewjob?jk=ce048321d827d921&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 39.95055,
                    "longitude" : -75.15934,
                    "jobkey" : "ce048321d827d921",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Philadelphia, PA",
                    "formattedRelativeTime" : "3 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Beer Ranger",
                    "company" : "New Belgium Brewing Company",
                    "city" : "New York",
                    "state" : "NY",
                    "country" : "US",
                    "formattedLocation" : "New York, NY",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Fri, 08 Jan 2016 04:48:41 GMT",
                    "snippet" : "In the application process, you will be asked a question to select the territories to represent <b>New</b> <b>Belgium</b> <b>Brewing</b> in the NY market....",
                    "url" : "http://www.indeed.com/viewjob?jk=59bc8bc509a5d291&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 40.71154,
                    "longitude" : -74.00549,
                    "jobkey" : "59bc8bc509a5d291",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "New York, NY",
                    "formattedRelativeTime" : "14 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Beer Ranger",
                    "company" : "New Belgium Brewing Company",
                    "city" : "",
                    "state" : "NY",
                    "country" : "US",
                    "formattedLocation" : "New York",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Fri, 08 Jan 2016 04:48:47 GMT",
                    "snippet" : "In the application process, you will be asked a question to select the territories to represent <b>New</b> <b>Belgium</b> <b>Brewing</b> in the upstate NY market....",
                    "url" : "http://www.indeed.com/viewjob?jk=85d97e21319c9d4a&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "jobkey" : "85d97e21319c9d4a",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "New York",
                    "formattedRelativeTime" : "14 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Beer Ranger",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Wilmington",
                    "state" : "DE",
                    "country" : "US",
                    "formattedLocation" : "Wilmington, DE",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Thu, 07 Jan 2016 16:47:27 GMT",
                    "snippet" : "This is an account-level sales position focused on growing and managing <b>New</b> <b>Belgium</b> Brewing's business within the retail accounts and distributor partners in...",
                    "url" : "http://www.indeed.com/viewjob?jk=53e9d888404be80d&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 39.744507,
                    "longitude" : -75.54395,
                    "jobkey" : "53e9d888404be80d",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Wilmington, DE",
                    "formattedRelativeTime" : "15 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Lead Packaging Technician",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Asheville",
                    "state" : "NC",
                    "country" : "US",
                    "formattedLocation" : "Asheville, NC",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Thu, 21 Jan 2016 17:55:40 GMT",
                    "snippet" : "This position focuses on the departmental objectives and strategic goals, ensuring current and future projects are completed. This position also focuses on",
                    "url" : "http://www.indeed.com/viewjob?jk=00c91540a3267a11&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 35.5989,
                    "longitude" : -82.54945,
                    "jobkey" : "00c91540a3267a11",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Asheville, NC",
                    "formattedRelativeTime" : "23 hours ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Field Marketing Manager",
                    "company" : "New Belgium Brewing Company",
                    "city" : "New York",
                    "state" : "NY",
                    "country" : "US",
                    "formattedLocation" : "New York, NY",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Mon, 18 Jan 2016 23:37:21 GMT",
                    "snippet" : "The successful Field Marketing Manager candidate must reside in the <b>New</b> York City area and will be responsible for <b>New</b> <b>Belgium</b> field marketing activity in <b>New</b>...",
                    "url" : "http://www.indeed.com/viewjob?jk=573b45bb5df15829&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 40.71154,
                    "longitude" : -74.00549,
                    "jobkey" : "573b45bb5df15829",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "New York, NY",
                    "formattedRelativeTime" : "3 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Senior Web Developer",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Fort Collins",
                    "state" : "CO",
                    "country" : "US",
                    "formattedLocation" : "Fort Collins, CO",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Wed, 13 Jan 2016 05:17:29 GMT",
                    "snippet" : "<b>New</b> Belgium's Web Developers are responsible for designing, building and maintaining digital presence and web and data services for <b>New</b> <b>Belgium</b>....",
                    "url" : "http://www.indeed.com/viewjob?jk=ef2d9b76943ea7ee&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 40.585163,
                    "longitude" : -105.08242,
                    "jobkey" : "ef2d9b76943ea7ee",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Fort Collins, CO",
                    "formattedRelativeTime" : "9 days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Packaging Process Engineer",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Asheville",
                    "state" : "NC",
                    "country" : "US",
                    "formattedLocation" : "Asheville, NC",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Thu, 21 Jan 2016 17:55:39 GMT",
                    "snippet" : "Develop, implement, and optimize production procedures for <b>new</b> and existing manufacturing processes. This position provides support to production, maintenance,...",
                    "url" : "http://www.indeed.com/viewjob?jk=8b0c17748b2fa476&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 35.5989,
                    "longitude" : -82.54945,
                    "jobkey" : "8b0c17748b2fa476",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Asheville, NC",
                    "formattedRelativeTime" : "23 hours ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Area Sales Manager",
                    "company" : "New Belgium Brewing Company",
                    "city" : "New York",
                    "state" : "NY",
                    "country" : "US",
                    "formattedLocation" : "New York, NY",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Wed, 02 Dec 2015 20:57:02 GMT",
                    "snippet" : "Area Managers run either a single metro market/geography, or multiple metro markets and geographies. This position also focuses on developing Rangers into",
                    "url" : "http://www.indeed.com/viewjob?jk=87ee6ceaf4c0d950&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 40.71154,
                    "longitude" : -74.00549,
                    "jobkey" : "87ee6ceaf4c0d950",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "New York, NY",
                    "formattedRelativeTime" : "30+ days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Manager",
                    "company" : "New Belgium Brewing Company",
                    "city" : "Fort Collins",
                    "state" : "CO",
                    "country" : "US",
                    "formattedLocation" : "Fort Collins, CO",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Fri, 20 Nov 2015 20:19:28 GMT",
                    "snippet" : "Acts as an extension of the Sales team, partnering closely to develop and execute multi-channel, multi-audience programs for <b>New</b> <b>Belgium</b> brands....",
                    "url" : "http://www.indeed.com/viewjob?jk=fd0e118e510d8088&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 40.585163,
                    "longitude" : -105.08242,
                    "jobkey" : "fd0e118e510d8088",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Fort Collins, CO",
                    "formattedRelativeTime" : "30+ days ago",
                    "noUniqueUrl" : false
}
,
                {
                    "jobtitle" : "Brewer",
                    "company" : "New",
                    "city" : "Asheville",
                    "state" : "NC",
                    "country" : "US",
                    "formattedLocation" : "Asheville, NC",
                    "source" : "New Belgium Brewing Company",
                    "date" : "Wed, 07 Oct 2015 17:05:41 GMT",
                    "snippet" : "Drink",
                    "url" : "http://www.indeed.com/viewjob?jk=d041d20ed1dc83b8&qd=CNsHRtVFx7G0fNWVXGuFXjTNTZbjmCF_V_e6n_GmSNjBpzqBdk59KDZCc6R7ETJo5_DVNg6b4Du1UMFEjdO2upYk8G2jD9nKCawkoG-kRxJroiIWQbEJZZxqZjJWKrFdNVbuGkvXR_7b87sG_geiaw&indpubnum=3980356173222029&atk=1a9l7de52af7cfkk",
                    "onmousedown" : "function() { indeed_clk(this, '1427'); }",
                    "latitude" : 35.5989,
                    "longitude" : -82.54945,
                    "jobkey" : "d041d20ed1dc83b8",
                    "sponsored" : false,
                    "expired" : false,
                    "indeedApply" : false,
                    "formattedLocationFull" : "Asheville, NC",
                    "formattedRelativeTime" : "30+ days ago",
                    "noUniqueUrl" : false
}

    ]; // job list is an array of objects from indeed
*/

//DOM ELEMENTS FOR COUNTER
var $companyCount = $('#companyCount');
var $jobCount = $('#jobCount');


/**-----------------------------------------------------------------------------
  *
  * Basic functions for clearing the board and filtering results
  *
  *-----------------------------------------------------------------------------*/

  $('#form-container').submit(filterData);
  var $positionResults = $("#result-positions");

  function clearBoard() {
    $positionResults.text("");
      $jobCount.text(jobList.length);
  };

  function postCurrentList() {
    // post currentList to the board
    if (currentList.length != 0) {
      for (var i = 0; i<currentList.length; i++) {
        var post = currentList[i];
        postTitle = '<h2>' + post.jobtitle + '</h2>';
        postCompany = '<h4>' + post.company + '</h4>';
        postSnippet = '<p>' + post.snippet + '</p>';
        postLocation = '<p>' + post.formattedLocationFull + '</p>';
        postDate = '<p>' + post.date + '</p>';
        postURL = '<a target="_blank" href="' + post.url + '"> View Posting Here </a>';
        $positionResults.append('<div class="posting-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
        }
      }  else {
      $positionResults.append('<div class="keep-trying-posting-item"> <h1>There is cool job out there for you!</h1><h3>No results to display. Try something else.</h3> </div>');
    }
  };

/**-----------------------------------------------------------------------------
  *
  *      Set the currentList to the jobList and get the fun started
  *
  *-----------------------------------------------------------------------------*/

  function initialBoard() {
      currentList = jobList;
      clearBoard();
      postCurrentList();
    };



/**-----------------------------------------------------------------------------
  *
  *      Filtering functions based on the search terms in the box
  *
  *-----------------------------------------------------------------------------*/

  function filterData() {

      // get searchToken from DOM
      var $searchToken = $("#position-token").val().toLowerCase();
      // Check value from form is coming in well
      //console.log($searchToken);

      var $searchTokenArray = $('#position-token').val().toLowerCase().split(" "); //splits your keywords at the spaces

      //console.log($searchTokenArray);

      // empty currentList
      currentList = [];

      // loop over keywords searching for exact match adding matches to currentList
        for(var i = 0; i < $searchTokenArray.length; i++) {
          searchThroughJson($searchTokenArray[i], jobList);  // inclusive way to do it... "any match displays results"
      };
      // go through the list again and clear out things that don't match all search terms
        for(var i=0; i<$searchTokenArray.length; i++){
            ensureAllMatch($searchTokenArray[i], currentList); // clears out any 'maybes'
        };
        for(var i=0; i<$searchTokenArray.length; i++){
            ensureAllMatch($searchTokenArray[i], currentList); // pass twice as popped throws it off TODO: refactor so it doesn't need this
        };

      // clear position positings
      clearBoard();
        //console.log("cleared board");

      // post currentList to the board
      postCurrentList();
      checkState();

      // update the counters
        $jobCount.text(currentList.length);

  return false;
  };


  function searchThroughJson(needle, JSONArray) {

    /**
      * First pass through the job list that fills the currentList
      * with all potentials that meet one of the terms
      **/

    for (var i = 0; i < JSONArray.length; i++) {

      if (! currentList.includes(JSONArray[i]) ) { // check to see if array item has already been added

          if (JSONArray[i].jobtitle.toLowerCase().search(needle) != -1) { //check title for match
            currentList.push(JSONArray[i]);
          } else if (JSONArray[i].snippet.toLowerCase().search(needle) != -1) { // check snippet
            currentList.push(JSONArray[i]);
          } else if (JSONArray[i].company.toLowerCase().search(needle) != -1) { // check company
            currentList.push(JSONArray[i]);
          } else if (JSONArray[i].state == needle) { // check state -- requires exact match
            currentList.push(JSONArray[i]);
          }  else {
          //  console.log('nothing found');
            }
      }

    };

  };


  function ensureAllMatch(needle, potentialList) {

    /**
      * Second Pass that pops out objects whose pieces don't match all terms
      * of the current search
      **/

          for (var i = 0; i < potentialList.length; i++) {
            if (  potentialList[i].jobtitle.toLowerCase().search(needle) == -1 &&
                  potentialList[i].snippet.toLowerCase().search(needle) == -1 &&
                  potentialList[i].company.toLowerCase().search(needle) == -1  ) {
                    potentialList.splice(i, 1);
                    console.log(currentList);
            } else {
                  //  console.log("That's a pretty number");
            };

          };
  }

  function checkState() {
    var stateSelected = $("#state-selector").val();

      if (stateSelected.length > 0){
        filterByState(stateSelected, currentList);
      }

  }


/**-----------------------------------------------------------------------------
  *
  *         Filter Based on the Selected State
  *
  *-----------------------------------------------------------------------------*/

    function filterByState(state, jobArray) {

      var listLengthStart = jobArray.length;

      var stateList = [];

      for (var i = 0; i < listLengthStart; i++) {

        if (jobArray[i].state == state) { // check state -- requires exact match
            stateList.push(jobArray[i]);
        }  else {
            //  console.log('nothing found');
        }

      };

        currentList = stateList; //update currentList

        // clear position positings and push the new stateList
        clearBoard();
        postCurrentList();

        //update counter
        $jobCount.text(currentList.length);



    };

    $("#state-selector").change(function() {

      stateSelected = $(this).val(); // grab the state value

      /**
        *   If there are 'currentList' results filter over those, otherwise
        *   filter over the larger jobList
        **/

      if (currentList.lenth > 0) {
      filterByState(stateSelected, currentList);
      } else {
      filterByState(stateSelected, jobList);
      }

      // go over and make sure search terms are accounted for
      filterData();


      });

      /** -----------------------------------------------------------------------------------------------
        *                    Generate Names List from companyList.js Names
        * ----------------------------------------------------------------------------------------------- */

         var nameList = [];

         // Requires a companyList variable that is a JSON containing a Name attribute

         for (var i = 0; i<companyList.length; i++) {
           var nameFixed = companyList[i].Name.replace(/ /g, '+'); // replaces space with a + in the name
           nameList.push(nameFixed); // adds the grammar prepped names to the nameFixed Array
         };

         //console.log(nameList); // check console to see if it worked




/** ------------------------------------------------------------------------------------------------------
  *                                Go to indeed and bring back all the jobs
  * ------------------------------------------------------------------------------------------------------ */

  /**
    *
    * Clean up the masterList and send the actual jobs to the jobList
    *
    */

function cleanMaster() {
  for (var i=0; i < masterList.length; i++) {
    if (masterList[i].results.length >= 1) {
      for (var j=0; j < masterList[i].results.length; j++) {
        jobList.push(masterList[i].results[j]);
      }
    };

  };
  return jobList;
}

function postInital(){
  cleanMaster();
  initialBoard();
  $jobCount.text(jobList.length);
  return 'post ran'
};


// set a timeout for indeed api response

  var indeedRequestTimeout = setTimeout(function(){
  $positionResults.text("failed to get indeed resources");
  },
  8000);

// set a pause for the getIndeed to run on setup

  var initalPostPause = setTimeout(function(){
    postInital();
  }, 8000);

// Prebuilt nameList
//var companySearchList = ["Accent+on+Independence", "Alpine+Banks+of+Colorado+Inc.", "Alpine+Lumber+Company", "AmWest+Control+Inc.", "Aspen+Wine+Guild", "Boecore+Inc", "Bradsby+Group", "C.B.+&+Potts+Restaurants", "CH2M+Hill", "Charles+D.+Jones+Company", "Colorado+Recovery", "Community+Language+Cooperative", "Culture+Counts", "Davey+Tree+Expert+Company", "Denver+Wholesale+Florists", "Design+Works", "Drive+Train+Industries,+Inc.", "Elward+Systems+Corp.", "Excalibur+Associates,+Inc.", "Facility+Logic", "FirstBank+Holding+Company", "Fort+Collins+Food+Cooperative", "General+Air", "GH+Phipps", "GROUND+Engineering+Consultants+Inc.", "Hazen+Research,+Inc.", "Henzel+Phelps+Construction", "IMA+Financial+Group", "Intelligent+Software+Solutions", "Lamp+Rynearson+&+Associates", "Larson+Distributing+Company", "Leevers+Supermarkets+Inc.", "Left+Hand+Brewing", "Lerch+Bates+Consultants", "Les+Schwab+Tires", "LID+Landscapes", "Lundquist+Associates+Inc.", "Mayu+Meditation+Cooperative", "McStain+Enterprises+Inc", "Merrick+&+Co", "Metcalf+Archaeological+Consultants+Inc", "Monroe+&+Newell+Engineers+Inc.", "Muller+Engineering", "MWH+Global", "Namaste+Solar", "Neenan+Archistruction", "New+Belgium+Brewing", "North+Park+Transportation+Company", "Odell+Brewing", "Ohlson+Lavoie+Collaborative", "P&L+Printing", "Payzone+Directional+Services", "PCL+Construction", "Pester+Marketing", "Pipe+Valve+&+Fitting+Company", "Polar+Field+Services", "Power+Zone", "RAM+International+(includes+C.B.+&+Potts)", "Re/Max+of+Cherry+Creek", "Ready+Talk", "RESPEC+Consulting", "RNL+Design", "Rocky+Mountain+Employee+Ownership+Center", "Roth+Distributing", "S.A.+Miro+Inc.", "San+Juan+Construction", "Stailey+Insurance", "Stoneage+Inc.", "STORserver+Inc.", "The+Group+Real+Estate+Co", "Trinidad+Benham+Corporation", "Union+Taxi+Cooperative", "Venoco+Inc.", "Vision+Care+Specialists", "Wheatridge+Pharmacy", "Wright+Water+Engineers", "Yenter+Companies+Inc.", "Zick+Business+Advisors+Inc."];

  // functioning API request to indeed... could be improved upon
  var indeedURL = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=New+Belgium&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28New+Belgium%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json'

  // loop through list of prefab company names, send ajax requests to indeed and then append the results to the positionResults container

  var companyQueryName;
  //var indeedURLTemplate = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=' + companyQueryName + '&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28' + companyQueryName + '%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json';

  var positionCount = 0; // count up how many positions there are

  function getIndeed()  {for (var i=0; i < nameList.length; i++) {

        companyQueryName = nameList[i];
        //console.log(companyQueryName);
        var indeedURLTemplate = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=' + companyQueryName + '&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28' + companyQueryName + '%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json';
        //console.log(indeedURLTemplate);

        $.ajax({
            url: indeedURLTemplate,
            dataType: "jsonp",
            jsonp: "callback",
            success: function( response ) {

                masterList.push(response); // masterList is an array of objects from indeed

                // ------- Add data to counter placeholders-------- /
                $companyCount.text(nameList.length);

                clearTimeout(indeedRequestTimeout); // needs to be a realistic time for all of the results...
            }

        });

      };
    };

    getIndeed();

    // need to explore .on
//    $.when(getIndeed()).done(postInital(), console.log("i hate dan"));

var FirebaseRef = new Firebase('https://blistering-fire-1147.firebaseio.com/'); // this work?

FirebaseRef.set({
  title: "Beacon is hitting up databases",
  author: "Beacon",
  location: {
    city: "Beacon Alley",
    state: "Canada",
  }
});

FirebaseRef.child("title").on("value", function(e) {
  console.log(e.val());
});

$("#view-all-btn").click(function(){
  initialBoard();
});
