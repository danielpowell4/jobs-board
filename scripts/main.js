
var masterList = [];
var currentList = [];

function filterData() {

    // get searchToken from DOM
    var $searchToken = $("#position-token").val();
    // Check value from form is coming in well
    //console.log($searchToken);

    var $searchTokenArray = $('#position-token').val().split(" "); //splits your keywords at the spaces

    //console.log($searchTokenArray);

    // empty currentList
    currentList = [];

    //loop over keywords searching for exact match adding matches to currentList
      for(var i = 0; i < $searchTokenArray.length; i++) {
        searchThroughJson($searchTokenArray, jobList);
    };

    // clear position positings
    $positionResults.text("");
    console.log("cleared board");

    // post currentList to the board
    if (currentList.length != 0) {
      for (var i = 0; i<currentList.length; i++) {
        var post = currentList[i];
        postTitle = '<h2>' + post.jobtitle + '</h2>';
        postCompany = '<h4>' + post.company + '</h4>';
        postSnippet = '<p>' + post.snippet + '</p>';
        postLocation = '<p>' + post.formattedLocationFull + '</p>';
        postDate = '<p>' + post.date + '</p>';
        postURL = '<a href="' + post.url + '"> View Posting Here </a>';

        $positionResults.append('<div class="positing-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
        }
      }  else {
      $positionResults.text("No results to display. Try something else. There's cool job out there for you!");
    }

return false;
};

function nameMatch(searchTerm) {
  return searchTerm.length > 2;
}

function searchThroughJson(needle, JSONArray) {
//  console.log('searchThroughJson RAN');

  for (var i = 0; i < JSONArray.length; i++) {
  //  console.log("inside of the for loop");
  //  console.log(JSONArray[i]);
  // console.log(i+1);
    if (JSONArray[i].jobtitle.search(needle) != -1) { //check title for match
      currentList.push(JSONArray[i]);
    } else if (JSONArray[i].snippet.search(needle) != -1) { // check snippet -- requires exact match
      currentList.push(JSONArray[i]);
    } else if (JSONArray[i].company.search(needle) != -1) { // check company -- requires exact match
      currentList.push(JSONArray[i]);
    } else if (JSONArray[i].state == needle) { // check state -- requires exact match
      currentList.push(JSONArray[i]);
    }  else {
      console.log('nothing found');
      }

    }


};

/**
  *
  * clear out old data before new request
  *  $positionResults.text("");
  *
  */

$('#form-container').submit(filterData);

var $positionResults = $("#result-positions");
$positionResults.text(""); // clears the positionResults... built to be called after a search button is pressed

var masterList = [];

var jobList = [

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

var currentList = [];

var post, postTitle, postCompany, postSnippet, postLocation, postDate, postURL;

function extractInfo(position) {
  post = postition;
  //  var xyz = new Post(); <-- need something like that going on
  this.prototype.postTitle = '<h2>' + post.jobtitle + '</h2>';
  this.prototype.postCompany = '<h4>' + post.company + '</h4>';
  this.prototype.postSnippet = '<p>' + post.snippet + '</p>';
  this.prototype.postLocation = '<p>' + post.formattedLocationFull + '</p>';
  this.prototype.postDate = '<p>' + post.date + '</p>';
  this.prototype.postURL = '<a href="' + post.url + '"> View Posting Here </a>';
  console.log(this.prototype);
}

















function Post() {
  this.currentList = [];
};

//Post.prototype.currentList = [];

Post.prototype.addToCurrentList = function(newPost) {
  this.currentList.push(newPost);
};

Post.prototype.clearBoard = function() {
  $positionResults.text("");
};

Post.prototype.pinToBoard = function(list) {
  var length = list.length;

  for (var i=0; i<length; i++) {
    $positionResults.append('<div class="positing-item">' + list[i].postTitle + list[i].postCompany + list[i].postSnippet + list[i].postLocation + list[i].postDate + list[i].postURL + '</div>')
  }

};

function extractInfo(position) {
  post = position;
  that.postTitle = '<h2>' + post.jobtitle + '</h2>';
  that.postCompany = '<h4>' + post.company + '</h4>';
  that.postSnippet = '<p>' + post.snippet + '</p>';
  that.postLocation = '<p>' + post.formattedLocationFull + '</p>';
  that.postDate = '<p>' + post.date + '</p>';
  that.postURL = '<a href="' + post.url + '"> View Posting Here </a>';

}

function pinToBoard() {
  $positionResults.append('<div class="positing-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
}

function addToMasterList() {
  masterList.push(that);
};

for (var i = 0; i<jobList.length; i++){
  var that = this;
  extractInfo(jobList[i]);
  addToMasterList();
  pinToBoard(jobList[i]);
}

/*
for (var i = 0; i<jobList.length; i++){
  post = jobList[i];
  postTitle = '<h2>' + post.jobtitle + '</h2>';
  postCompany = '<h4>' + post.company + '</h4>';
  postSnippet = '<p>' + post.snippet + '</p>';
  postLocation = '<p>' + post.formattedLocationFull + '</p>';
  postDate = '<p>' + post.date + '</p>';
  postURL = '<a href="' + post.url + '"> View Posting Here </a>';

  masterList.push(post); // add to masterList

  $positionResults.append('<div class="positing-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
  }
*/











/* -----------------------------------------------------------------------------------------------------
 *        Counter "App"
 * ----------------------------------------------------------------------------------------------------- */

//DOM ELEMENTS FOR COUNTER
var $companyCount = $('#companyCount');
var $jobCount = $('#jobCount');



/** ------------------------------------------------------------------------------------------------------
  *                                Go to indeed and bring back all the jobs
  * ------------------------------------------------------------------------------------------------------ */

  /** ---- Commented out as filter is being built better to not annoy indeed
    *          End Comment at the console logging the number of companies queried

// set a timeout for indeed api response

  var indeedRequestTimeout = setTimeout(function(){
  $positionResults.text("failed to get wikipedia resources");
  },
  8000);



// Prebuilt nameList
var companySearchList = ["Accent+on+Independence", "Alpine+Banks+of+Colorado+Inc.", "Alpine+Lumber+Company", "AmWest+Control+Inc.", "Aspen+Wine+Guild", "Boecore+Inc", "Bradsby+Group", "C.B.+&+Potts+Restaurants", "CH2M+Hill", "Charles+D.+Jones+Company", "Colorado+Recovery", "Community+Language+Cooperative", "Culture+Counts", "Davey+Tree+Expert+Company", "Denver+Wholesale+Florists", "Design+Works", "Drive+Train+Industries,+Inc.", "Elward+Systems+Corp.", "Excalibur+Associates,+Inc.", "Facility+Logic", "FirstBank+Holding+Company", "Fort+Collins+Food+Cooperative", "General+Air", "GH+Phipps", "GROUND+Engineering+Consultants+Inc.", "Hazen+Research,+Inc.", "Henzel+Phelps+Construction", "IMA+Financial+Group", "Intelligent+Software+Solutions", "Lamp+Rynearson+&+Associates", "Larson+Distributing+Company", "Leevers+Supermarkets+Inc.", "Left+Hand+Brewing", "Lerch+Bates+Consultants", "Les+Schwab+Tires", "LID+Landscapes", "Lundquist+Associates+Inc.", "Mayu+Meditation+Cooperative", "McStain+Enterprises+Inc", "Merrick+&+Co", "Metcalf+Archaeological+Consultants+Inc", "Monroe+&+Newell+Engineers+Inc.", "Muller+Engineering", "MWH+Global", "Namaste+Solar", "Neenan+Archistruction", "New+Belgium+Brewing", "North+Park+Transportation+Company", "Odell+Brewing", "Ohlson+Lavoie+Collaborative", "P&L+Printing", "Payzone+Directional+Services", "PCL+Construction", "Pester+Marketing", "Pipe+Valve+&+Fitting+Company", "Polar+Field+Services", "Power+Zone", "RAM+International+(includes+C.B.+&+Potts)", "Re/Max+of+Cherry+Creek", "Ready+Talk", "RESPEC+Consulting", "RNL+Design", "Rocky+Mountain+Employee+Ownership+Center", "Roth+Distributing", "S.A.+Miro+Inc.", "San+Juan+Construction", "Stailey+Insurance", "Stoneage+Inc.", "STORserver+Inc.", "The+Group+Real+Estate+Co", "Trinidad+Benham+Corporation", "Union+Taxi+Cooperative", "Venoco+Inc.", "Vision+Care+Specialists", "Wheatridge+Pharmacy", "Wright+Water+Engineers", "Yenter+Companies+Inc.", "Zick+Business+Advisors+Inc."];


// functioning API request to indeed... could be improved upon
var indeedURL = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=New+Belgium&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28New+Belgium%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json'


  // loop through list of prefab company names, send ajax requests to indeed and then append the results to the positionResults container

  var companyQueryName;
  //var indeedURLTemplate = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=' + companyQueryName + '&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28' + companyQueryName + '%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json';

  var positionCount = 0; // count up how many positions there are
  var masterList = [];

  for (var i=0; i < companySearchList.length; i++) {

      companyQueryName = companySearchList[i];
      //console.log(companyQueryName);
      var indeedURLTemplate = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=' + companyQueryName + '&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=30&sort=&psf=advsrch&q=company%3A%28' + companyQueryName + '%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json';
      //console.log(indeedURLTemplate);

      $.ajax({
          url: indeedURLTemplate,
          dataType: "jsonp",
          jsonp: "callback",
          success: function( response ) {

            var jobList = response.results; // job list is an array of objects from indeed


      /* --------------------------------------------------------------------
             loop through the results, push them to masterList and place them on the job board
         -------------------------------------------------------------------- * / <------------------ GET RID OF THIS SPACE

            var post, postTitle, postCompany, postSnippet, postLocation, postDate, postURL;

            for (var i = 0; i<jobList.length; i++){
              post = jobList[i];
              postTitle = '<h2>' + post.jobtitle + '</h2>';
              postCompany = '<h4>' + post.company + '</h4>';
              postSnippet = '<p>' + post.snippet + '</p>';
              postLocation = '<p>' + post.formattedLocationFull + '</p>';
              postDate = '<p>' + post.date + '</p>';
              postURL = '<a href="' + post.url + '"> View Posting Here </a>';

              masterList.push(post); // add to masterList

              $positionResults.append('<div class="positing-item">' + postTitle + postCompany + postSnippet + postLocation + postDate + postURL + '</div>');
              }

              // ------- Add data to counter placeholders-------- //
              $jobCount.text(masterList.length);
              $companyCount.text(companySearchList.length);

              clearTimeout(indeedRequestTimeout); // needs to be a realistic time for all of the results...
          }
      });


  };



  //console.log('Numver of Companies Queried: ' + companySearchList.length);


------------------------------------------------------------------------------------------------------ Dont forget to get rid of the space from above */



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
