/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
// FOR REFERENCE WHILE REBUILDING //
// var HTMLheaderName = '<h1 id="name">%data%</h1>';
// var HTMLheaderRole = '<span>%data%</span><hr/>';

// var HTMLcontactGeneric = '<li class="flex-item"><span class="color-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLmobile = '<li class="flex-item"><span class="color-text">mobile</span><span class="white-text">%data%</span></li>';
// var HTMLemail = '<li class="flex-item"><span class="color-text">email</span><span class="white-text">%data%</span></li>';
// var HTMLtwitter = '<li class="flex-item"><span class="color-text">twitter</span><span class="white-text">%data%</span></li>';
// var HTMLgithub = '<li class="flex-item"><span class="color-text">github</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="color-text">blog</span><span class="white-text">%data%</span></li>';
// var HTMLlocation = '<li class="flex-item"><span class="color-text">location</span><span class="white-text">%data%</span></li>';

// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

// var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';

// var HTMLprojectStart = '<div class="project-entry"></div>';
// var HTMLprojectTitle = '<a href="#">%data%</a>';
// var HTMLprojectDates = '<div class="date-text">%data%</div>';
// var HTMLprojectDescription = '<p><br>%data%</p>';
// var HTMLprojectImage = '<img src="%data%">';

// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

// var internationalizeButton = '<button>Internationalize</button>';
// var googleMap = '<div id="map"></div>';

// var HTMLheaderName = '<h1 id="name">%data%</h1>';
// var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = ;
var HTMLmobile = ;
var HTMLemail = ;
var HTMLtwitter = ;
var HTMLgithub = ;
var HTMLblog = ;
var HTMLlocation = ;

var HTMLbioPic = ;
var HTMLwelcomeMsg = ;

var HTMLspacer = '<div class="spacer"></div>';

// Personal Profile Header, append to <section class="page-profile"></section>
var HTMLprofileStart = '<div class="profile container"></div>';
var HTMLprofileHeader = '<header class="section-header><h2 class="section-title"><span>Personal Profile</span></h2>';
var HTMLprofileSubtitle = '<p class="section-subtitle">%data%</p></header>';
var HTMLprofileRow = '<div class="row"></row>';
// Append below into profileRow
var HTMLprofilePic = '<div class="col-md-3><div class="profile"><img src="%data%"" id=""></div></div>';
var HTMLprofileInfo = '<div class="col-md-9"><p>%data%</p></div>'

// Append to <section class="page-skills"></section>
var HTMLskillsStart = '<div class="skills container"></div>';
var HTMLskillsHeader = '<header class="section-header><h2 class="section-title"><span>Skills</span></h2>';
var HTMLskillsSubtitle = '<p class="section-subtitle">%data%</p></header>';
// Append skillsItemStart to "skills container", sibling to <header>
var HTMLskillsItemStart = '<div class="row"></div>';
var HTMLskillsItem = '<div class="col-md-2><p>%data%</p></div>';


// Append to <section class="page-experience"></section>
var HTMLworkStart = '<div class="work container"></div>';
var HTMLworkHeader = '<header class="section-title"><h2 class="section-title"><span>Experience</span></h2>';
var HTMLworkSubtitle = '<p class="section-subtitle">%data%</p></header>';
// Append to <article class="experience"></article> 
var HTMLworkEmployer = '<div class="row"><div class="col-md-4"><article class="experience"><header><h3>%data%</h3>';
var HTMLworkTitle = '<p>%data% ';
var HTMLworkLocation = ', %data%';
var HTMLworkDates = ', %data</p></header>';
var HTMLworkDescription = '<p>%data%</p></article></div></div>';

var HTMLprojectStart = ;
var HTMLprojectTitle = ;
var HTMLprojectDates = ;
var HTMLprojectDescription = ;
var HTMLprojectImage = ;

// Education Section Header 
var HTMLschoolStart = '<div class="education container"></div>';
var HTMLschoolHeader = '<header class="section-header"><h2 class="section-title><span>Education</span></h2>';
var HTMLschoolSubtitle = '<p class="section-subtitle">%data%</p></header>';
var HTMLschoolListStart = '<div class="row"></div>';
// Individual School Rows
var HTMLschoolName = '<div class="col-md-6"><article class="education"><header><h3>%data%</h3>';
var HTMLschoolDegree = '<p>%data%, ';
var HTMLschoolDates = ' %data%,';
var HTMLschoolLocation = ' %data,';
var HTMLschoolMajor = ' %data%</p></header>';
var HTMLschoolDescription = '<p>%data%</p></article></div>';
// Online School?
var HTMLonlineClasses = '<div class="col-md-6><article class="education"><header><h3>%data%</h3>';
var HTMLonlineTitle = '<p>%data%, ';
var HTMLonlineSchool = '%data%, ';
var HTMLonlineDates = ' %data%, ';
var HTMLonlineURL = '<a href="#">%data%</a></p></header>';
var HTMLonlineDescription = '<p>%data%</p></article></div>'

var internationalizeButton = ;
var googleMap = ;


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      animation: google.maps.Animation.DROP,
      title: name
    });

    google.maps.event.addListener(marker, 'click', toggleBounce);

    // Added a Bounce animation when users click the marker
    function toggleBounce() {
      if (marker.getAnimation() != null) {
        marker.setAnimation(null);
      } 
      else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    var styles = [
      {
        stylers: [
          { "saturation" : -100},
          { "visibility" : "on"}
        ]
      }
    ];

    map.setOptions({styles: styles});

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infowindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
