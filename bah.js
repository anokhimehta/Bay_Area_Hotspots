class loc {
  constructor(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
  };
  getDict(){
    return new google.maps.LatLng(this.latitude,this.longitude);
  };
  getInfoWindow(contentString){
    return new google.maps.InfoWindow({content: contentString});
  };
  getMarker(m, t){
    return new google.maps.Marker({
      position: this.getDict(),
      map: m,
      title: t });
  };
}//end class
function listen(iw, m, mark) {
  iw.open(m,mark);
}
function initMap() {
  var infowindows = [];
  var markers  = [];
  var tpumps = new loc(37.763651,-122.478593);
  var pekoe = new loc(37.314634,-121.790131);
  var gongcha = new loc(37.488570,-121.9290260);
  var moobar = new loc(37.345997,-121.979069);
  var bakedbear = new loc(37.807402,-122.417155);
  var steep = new loc(37.783115,-122.391778);
  var uji = new loc(37.863657,-122.258288);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: tpumps.getDict()
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

//INFOWINDOWS
  var infowindow = tpumps.getInfoWindow(contentString);
  var infowindow2 = pekoe.getInfoWindow(contentString2);
	var infowindow3 = gongcha.getInfoWindow(contentString3);
  var infowindow4 = moobar.getInfoWindow(contentString4);
  var infowindow5 = bakedbear.getInfoWindow(contentString5);
  var infowindow6 = steep.getInfoWindow(contentString6);
  var infowindow7 = uji.getInfoWindow(contentString7);

//MARKERS
  var marker = tpumps.getMarker(map,'T-Pumps');
  infowindows.push(infowindow);
  markers.push(marker);

  var marker2 = pekoe.getMarker(map,'Pekoe');
  infowindows.push(infowindow2);
  markers.push(marker2);

  var marker3 = gongcha.getMarker(map,'Gongcha');
  infowindows.push(infowindow3);
  markers.push(marker3);

  var marker4 = moobar.getMarker(map,'Moo Bar');
  infowindows.push(infowindow4);
  markers.push(marker4);

  var marker5 = bakedbear.getMarker(map,'The Baked Bear');
  infowindows.push(infowindow5);
  markers.push(marker5);

  var marker6 = steep.getMarker(map,'STEEP Creamery and Tea');
  infowindows.push(infowindow6);
  markers.push(marker6);

  var marker7 = uji.getMarker(map,'Uji Time');
  infowindows.push(infowindow7);
  markers.push(marker7);

  marker.addListener('click',function() {
    infowindow.open(map,marker);
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
