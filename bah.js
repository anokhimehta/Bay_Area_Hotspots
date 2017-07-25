

function initMap() {
  var tpumps = {lat: 37.763651, lng: -122.478593};
  var pekoe = {lat: 37.314634, lng: -121.790131};
  var gongcha = {lat: 37.488570, lng: -121.929026};
  var moobar = {lat: 37.345997, lng: -121.979069};
  var bakedbear = {lat: 37.807402, lng: -122.417155};
  var steep = {lat: 37.783115, lng: -122.391778};
  var uji = {lat: 37.863657, lng: -122.258288};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: tpumps
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">T-pumps</h1>'+
      '<div id="bodyContent">'+
      '<p>A great boba place in San Francisco</p>' +'<p>1916 Irving St, San Francisco, CA 94122</p>' +
'<img id="myImage" src="https://media.fivestars.com/biz_pictures/13b8ce4ab8e14a708f966a000561d5e2.png" height=150 width=150></img>' +
      '</div>'+
      '</div>';
	var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Pekoe</h1>'+
      '<div id="bodyContent">'+
      '<p>more boba</p>' +'<p>3276 S White Rd, San Jose, CA 95148</p>' +
'<img id="myImage" src="https://s3-media2.fl.yelpcdn.com/bphoto/vaZcTlmFJLKUnMA_ktvTrw/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
   var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongcha</h1>'+
      '<div id="bodyContent">'+
      '<p>more boba</p>' +'<p>46827 Warm Springs Blvd #101, Fremont, CA 94539</p>' +
'<img id="myImage" src="https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s320x320/e35/18512659_1443047192413100_368464299431034880_n.jpg?ig_cache_key=MTUxODMxNzkxNzQ5ODIxNTM5NA%3D%3D.2" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Moo Bar</h1>'+
      '<div id="bodyContent">'+
      '<p>more boba</p>' +'<p>1080 Kiely Blvd, Santa Clara, CA 95051</p>' +
'<img id="myImage" src="https://s3-media3.fl.yelpcdn.com/bphoto/6MNhqV7zrNdzTdiK4vqzHw/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Baked Bear of Fishermans Wharf</h1>'+
      '<div id="bodyContent">'+
      '<p>ice cream</p>' +'<p>2824 Jones St, San Francisco, CA 94133</p>' +
'<img id="myImage" src="https://s3-media4.fl.yelpcdn.com/bphoto/8fqqN6L3cNT3IswDbWKm4A/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString6 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">STEEP Creamery & Tea</h1>'+
      '<div id="bodyContent">'+
      '<p>more boba</p>' +'<p>270 Brannan St, San Francisco, CA 94107</p>' +
'<img id="myImage" src="https://s3-media3.fl.yelpcdn.com/bphoto/071-8PyEDwXBAwhMKkQ7-w/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
	var contentString7 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uji Time</h1>'+
      '<div id="bodyContent">'+
      '<p>more boba</p>' +'<p>2575 Telegraph Ave, Berkeley, CA 94704</p>' +
'<img id="myImage" src="https://s3-media1.fl.yelpcdn.com/bphoto/92RgfLHRABBCNxBsBoGg0w/ls.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  	var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
	var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });
   var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });
    var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });
  var marker = new google.maps.Marker({
    position: tpumps,
    map: map,
    title: 'T-pumps'
  });
  var marker2 = new google.maps.Marker({
    position: pekoe,
    map: map,
    title: 'Pekoe'
  });
  var marker3 = new google.maps.Marker({
    position: gongcha,
    map: map,
    title: 'Gongcha'
  });
  var marker4 = new google.maps.Marker({
    position: moobar,
    map: map,
    title: 'Moo Bar'
  });
  var marker5 = new google.maps.Marker({
    position: bakedbear,
    map: map,
    title: 'The Baked Bear'
  });
    var marker6 = new google.maps.Marker({
    position: steep,
    map: map,
    title: 'STEEP Creamery and Tea'
  });
 var marker7 = new google.maps.Marker({
    position: uji,
    map: map,
    title: 'Uji Time'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

   marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
   marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
    marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });
  marker6.addListener('click', function() {
    infowindow6.open(map, marker6);
  });
    marker7.addListener('click', function() {
    infowindow7.open(map, marker7);
  });

}
