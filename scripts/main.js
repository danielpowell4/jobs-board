
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

loadData;

$('#form-container').submit(loadData);


var indeedURL = 'http://api.indeed.com/ads/apisearch?publisher=3980356173222029&as_and=&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=New+Belgium&jt=all&st=&salary=&radius=25&l=&fromage=any&limit=10&sort=&psf=advsrch&q=company%3A%28New+Belgium%29&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json'

// will need to set a timeout for indeed api response
/*  * var indeedRequestTimeout = setTimeout(function(){
    * $wikiElem.text("failed to get wikipedia resources");
    * 8000);

*/

$.ajax({
    url: indeedURL,
    dataType: "jsonp",
    jsonp: "callback",
    success: function( response ) {
      console.log(response);

      //  var articleList = response[1];

      //  for (var i = 0; i < articleList.length; i++) {
      //      articleStr = articleList[i];
      //      var url = 'http://en.wikipedia.org/wiki/' + articleStr;
      //      $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
      //  };

      //  clearTimeout(wikiRequestTimeout);
    }
});
