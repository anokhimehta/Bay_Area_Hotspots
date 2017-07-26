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
  var vampirepenguin = new loc(37.404312, -121.880633);
  var popbar = new loc(37.387347, -121.885299);
  var snowyvillage = new loc(37.382736, -121.897151);
  var yumiyogurt = new loc(37.324117, -121.968636);
  var milkcow = new loc(37.504793, -121.976458);
  var ohoney = new loc(37.705035, -121.851508);
  var yummitea = new loc(37.414945, -121.875613);
  var meetfresh = new loc(37.324409, -122.011102);
  var bobaguys = new loc(37.502685, -122.257053);
  var teaquation = new loc(37.483934, -122.232652);
  var queenscafe = new loc(37.422482, -121.916635);
  var homecafe = new loc(37.754469, -122.477016);
  var cream = new loc(37.447559, -122.159797);
  var recess = new loc(37.290589, -121.880591);
  var milknwood = new loc(37.330204, -121.886385);
  var tiger = new loc(37.593983, -122.384308);
  var whatever = new loc(37.324488, -122.034073);
  var tswirl = new loc(37.322095, -122.016984);
  var vans = new loc(37.322815, -121.824144);
  var mintsnhoney = new loc(37.496182, -122.247695);
  var milkncookie = new loc(37.708630, -122.091285);
  var cookiebar = new loc(37.775490, -122.276511);
  var nekter = new loc(38.063919, -122.533778);
  var freshnation = new loc(37.563246, -122.325125);
  var bellygood = new loc(37.785089, -122.430560);
  var tealyfe = new loc(37.332430, -121.857770);
  var popup = new loc(37.266997, -121.833672);
  var icicles = new loc(37.305188, -121.899314);
  var maven = new loc(37.312787, -121.864847);	
  var honeyberry = new loc(37.300587, -121.771670);
  var pop = new loc(37.762062, -121.433319);
  var fantasia = new loc(37.395425, -121.946525);
  var tleaf = new loc(37.248622, -121.857923);
  var milkbomb = new loc(37.764475, -122.401180);
  var creamistry = new loc(37.444267, -122.163036);
  var plentea = new loc(37.867543, -122.259572);
  var teasociety = new loc(37.306162, -121.810569);
  var psycho = new loc(37.286711, -121.949532);
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
 var contentString8 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Vampire Penguin</h1>'+
      '<div id="bodyContent">'+
      '<p>weird stuff</p>' +'<p>2671 Cropley Ave, San Jose, CA 95132</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/19366969_1209244965865547_6237434270718099456_n.jpg?ig_cache_key=MTU0MzIwNjEyMzIzNDE5Njc1MQ%3D%3D.2" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString9 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Popbar</h1>'+
      '<div id="bodyContent">'+
      '<p>gelato</p>' +'<p>1628 Hostetter Rd, San Jose, CA 95131</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/19534729_298747180596256_8706358107283914752_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString10 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Snowy Village</h1>'+
      '<div id="bodyContent">'+
      '<p>snow</p>' +'<p>1078 E Brokaw Rd #40, San Jose, CA 95131</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19437090_325433227901522_4474000675566518272_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString11 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Yumi Yogurt</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>3787 Stevens Creek Blvd, Santa Clara, CA 95051</p>' +
'<img id="myImage" src="https://s3-media1.fl.yelpcdn.com/bphoto/gKr0PS-dxKDYr-YJ2ePnDg/348s.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
 	var contentString12 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Milkcow</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>5657 Auto Mall Pkwy, Fremont, CA 94538</p>' +
'<img id="myImage" src="https://s3.burpple.com/foods/3395821299bd05bad3c1220280_original.?1426350918" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString13 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">O\'Honey</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>3600 Fallon Rd, Dublin, CA 94568</p>' +
'<img id="myImage" src="https://s3-media4.fl.yelpcdn.com/bphoto/lwI99X5R7T8wMWVykXBUuw/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Yummi Hotpot and Tea</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>2181 Morrill Ave, San Jose, CA 95132</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/19425433_1919013771643789_8505692055484235776_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
	var contentString15 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Meet Fresh</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>19449 Stevens Creek Blvd #120, Cupertino, CA 95014</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18096130_114280825799354_2470041206667608064_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString16 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Boba Guys</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>872 Laurel St, San Carlos, CA 94070</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17266277_218915318584494_1719213788693004288_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString17 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Tequation Cafe</h1>'+
      '<div id="bodyContent">'+
      '<p>tea</p>' +'<p>1036 El Camino Real, Redwood City, CA 94063</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.18.1080.1080/16230978_368042460242730_3187793674201202688_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString18 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Queen\'s Cafe</h1>'+
      '<div id="bodyContent">'+
      '<p>snow</p>' +'<p>372 Barber Ln, Milpitas, CA 95035</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/17127015_461888530809061_893808691734642688_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
  var contentString19 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Home Cafe</h1>'+
      '<div id="bodyContent">'+
      '<p>coffee</p>' +'<p>1222 Noriega St, San Francisco, CA 94122 Get directions</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15046859_1257923207580071_6139610227273629696_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
 	var contentString20 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CREAM</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>440 University Ave, Palo Alto, CA 94301</p>' +
'<img id="myImage" src="https://s-media-cache-ak0.pinimg.com/736x/2e/07/e0/2e07e077a2880dc0b70b748f3b69b42c--tag-icecream.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString21 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Recess Italian Ice Desserts</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>2390 Almaden Rd #30, San Jose, CA 95125</p>' +
'<img id="myImage" src="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14309952_1252133204829188_229705674307665920_n.jpg?ig_cache_key=MTM0NTI4MDIzNDk2NjEyMDI3MA%3D%3D.2" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString22 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Milk & Wood</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>387 S 1st St, San Jose, CA 95113</p>' +
'<img id="myImage" src="https://s3-media3.fl.yelpcdn.com/bphoto/Zder4UfQQYRVSIPAvm8A6A/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString23 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Tiger Tea and Juice</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>1803 El Camino Real, Burlingame, CA 94010</p>' +
'<img id="myImage" src="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.66.865.865/14566533_669262203242475_6299509682155290624_n.jpg?ig_cache_key=MTM1NTk3NDA5NzA2MjYwODk2MQ%3D%3D.2.c" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString24 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">What8ver Express</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>10118 Bandley Dr, Cupertino, CA 95014</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15624076_888159971325055_2384082877961732096_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString25 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">T-Swirl Crepe</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>19650 Stevens Creek Blvd, Cupertino, CA 95014</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14540504_1756962184563338_7456767574722740224_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString26 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Van\'s Bakery</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>1824 Tully Rd, San Jose, CA 95122</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18380633_432541220443601_8602369398495248384_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString27 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Mints and Honey</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>1524 El Camino Real, San Carlos, CA 94070</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17934503_1350134618409692_2980208455857471488_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString28 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Milk and Cookie Bar</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>18911 Lake Chabot Rd, Castro Valley, CA 94546</p>' +
'<img id="myImage" src="https://s3-media2.fl.yelpcdn.com/bphoto/rV6ZPGaO-xFrZTRurbZOIg/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString29 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Cookiebar</h1>'+
      '<div id="bodyContent">'+
      '<p>ice cream</p>' +'<p>1606 Webster St, Alameda, CA 94501</p>' +
'<img id="myImage" src="https://s3-media3.fl.yelpcdn.com/bphoto/Q1_Q1OdqjEEP-O5qwsObXg/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString30 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Nekter Juice Bar</h1>'+
      '<div id="bodyContent">'+
      '<p>ice cream</p>' +'<p>5800 Nave Dr L, Novato, CA 94949</p>' +
'<img id="myImage" src="https://s3-media2.fl.yelpcdn.com/bphoto/3brAGG8Aby4Pee9RsigMnQ/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString31 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fresh Nation Desserts</h1>'+
      '<div id="bodyContent">'+
      '<p>ice cream</p>' +'<p>30 E 3rd Ave, San Mateo, CA 94401</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19955026_1942736595941750_837778786068987904_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString32= '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Belly Good Cafe and Crepes</h1>'+
      '<div id="bodyContent">'+
      '<p>ice cream</p>' +'<p>1737 Post St # 393, San Francisco, CA 94115</p>' +
'<img id="myImage" src="https://s3-media2.fl.yelpcdn.com/bphoto/Y0zr0ZvqZ2jAPHKfJWthlg/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString33 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Tea Lyfe</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>989 Story Rd #8018, San Jose, CA 95122</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.61.1080.1080/19932007_1869858899898485_5570621579898912768_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString34 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Pop Up Tea</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>Blossom Valley, 185 Branham Ln #2, San Jose, CA 95136</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18581308_251795411968141_8706209930912202752_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString35 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Icicles</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>1275 Lincoln Ave #1, San Jose, CA 95125</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14533466_1225608867511450_9159346074610040832_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString36 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Maven\’s Creamery</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>1701 S 7th St suite 7, San Jose, CA 95112</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18879016_300384090403691_9004563879988035584_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString37 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Honey Berry</h1>'+
      '<div id="bodyContent">'+
      '<p>Ice cream</p>' +'<p>4848 San Felipe Rd #170, San Jose, CA 95135</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18809190_1516883158364468_3133208711498039296_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString38 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">POP</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>563 West Clover Road, (INSIDE STARBREAD BAKERY), Tracy, CA 95376</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20214613_1896500573934595_733037341312024576_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString39 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fantasia Coffee and Tea</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>3969 Rivermark Pkwy, Santa Clara, CA 95054</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c106.0.867.867/18644928_154197151787236_5274291230434394112_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString40 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Tleaf Teapresso</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>860 Blossom Hill Rd, San Jose, CA 95123</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11356568_1496060550707123_1924035905_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString41 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Milkbomb</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>1717 17th St, San Francisco, CA 94103</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/20065301_705257312995919_2993917166832582656_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString42 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Creamistry</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>164 University Ave, Palo Alto, CA 94301</p>' +
'<img id="myImage" src="https://s3-media2.fl.yelpcdn.com/bphoto/ZvfluyYcGTqUlBDnP_LfEg/o.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString43 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Plentea</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>2430 Durant Ave, Berkeley, CA 94704</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.100.1080.1080/19765258_1339423326178285_494332447798853632_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString44 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Teasociety</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>1654 Capitol Expy, San Jose, CA 95121</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19984218_1154662304665589_2681516020409040896_n.jpg" height=150 width=150></img>' +
      '</div>'+
      '</div>';
var contentString45 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Psycho Donuts</h1>'+
      '<div id="bodyContent">'+
      '<p>Tea/Juice</p>' +'<p>2006 Winchester Blvd, Campbell, CA 95008</p>' +
'<img id="myImage" src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.67.1080.1080/16465005_1325144177562700_6980028914991104000_n.jpg" height=150 width=150></img>' +
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
	var infowindow8 = vampirepenguin.getInfoWindow(contentString8);
  var infowindow9 = popbar.getInfoWindow(contentString9);
  var infowindow10 = snowyvillage.getInfoWindow(contentString10);
  var infowindow11 = yumiyogurt.getInfoWindow(contentString11);
  var infowindow12 = milkcow.getInfoWindow(contentString12);
  var infowindow13 = ohoney.getInfoWindow(contentString13);
  var infowindow14 = yummitea.getInfoWindow(contentString14);
  var infowindow15 = meetfresh.getInfoWindow(contentString15);
  var infowindow16 = bobaguys.getInfoWindow(contentString16);
  var infowindow17 = teaquation.getInfoWindow(contentString17);
  var infowindow18 = queenscafe.getInfoWindow(contentString18);
  var infowindow19 = homecafe.getInfoWindow(contentString19);
  var infowindow20 = cream.getInfoWindow(contentString20);
  var infowindow21 = recess.getInfoWindow(contentString21);
  var infowindow22 = milknwood.getInfoWindow(contentString22);
  var infowindow23 = tiger.getInfoWindow(contentString23);
  var infowindow24 = whatever.getInfoWindow(contentString24);
  var infowindow25 = tswirl.getInfoWindow(contentString25);
  var infowindow26 = vans.getInfoWindow(contentString26);
  var infowindow27 = mintsnhoney.getInfoWindow(contentString27);
  var infowindow28 = milkncookie.getInfoWindow(contentString28);
  var infowindow29 = cookiebar.getInfoWindow(contentString29);
  var infowindow30 = nekter.getInfoWindow(contentString30);
  var infowindow31= freshnation.getInfoWindow(contentString31);
  var infowindow32 = bellygood.getInfoWindow(contentString32);
  var infowindow33 = tealyfe.getInfoWindow(contentString33);
  var infowindow34 = popup.getInfoWindow(contentString34);
  var infowindow35 = icicles.getInfoWindow(contentString35);
  var infowindow36 = maven.getInfoWindow(contentString36);
  var infowindow37 = honeyberry.getInfoWindow(contentString37);
  var infowindow38 = pop.getInfoWindow(contentString38);
  var infowindow39 = fantasia.getInfoWindow(contentString39);
  var infowindow40 = tleaf.getInfoWindow(contentString40);
  var infowindow41 = milkbomb.getInfoWindow(contentString41);
  var infowindow42 = creamistry.getInfoWindow(contentString42);
  var infowindow43 = plentea.getInfoWindow(contentString43);
  var infowindow44 = teasociety.getInfoWindow(contentString44);
  var infowindow45 = psycho.getInfoWindow(contentString45);

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
	
var marker8 = vampirepenguin.getMarker(map,'Vampire Penguin');
  infowindows.push(infowindow8);
  markers.push(marker8);
  
  var marker9 = popbar.getMarker(map,'Popbar');
  infowindows.push(infowindow9);
  markers.push(marker9);
  
  var marker10 = snowyvillage.getMarker(map,'Snowy Village');
  infowindows.push(infowindow10);
  markers.push(marker10);
  
  var marker11 = yumiyogurt.getMarker(map,'Yumi Yogurt');
  infowindows.push(infowindow11);
  markers.push(marker11);
 	
  var marker12 = milkcow.getMarker(map,'Milkcow');
  infowindows.push(infowindow12);
  markers.push(marker12);
  
  var marker13 = ohoney.getMarker(map,'O\'Honey');
  infowindows.push(infowindow13);
  markers.push(marker13);
  
  var marker14 = yummitea.getMarker(map,'Yummi Hotpot and Tea');
  infowindows.push(infowindow14);
  markers.push(marker14);
  
  var marker15 = meetfresh.getMarker(map,'Meet Fresh');
  infowindows.push(infowindow15);
  markers.push(marker15);
  
  var marker16 = bobaguys.getMarker(map,'Boba Guys');
  infowindows.push(infowindow16);
  markers.push(marker16);
  
  var marker17 = teaquation.getMarker(map,'Teaquation Cafe');
  infowindows.push(infowindow17);
  markers.push(marker17);
  
  var marker18 = queenscafe.getMarker(map,'Queen\'s Cafe');
  infowindows.push(infowindow18);
  markers.push(marker18);
  
  var marker19 = homecafe.getMarker(map,'Home Cafe');
  infowindows.push(infowindow19);
  markers.push(marker19);
  
  var marker20 = cream.getMarker(map,'CREAM');
  infowindows.push(infowindow20);
  markers.push(marker20);

	var marker21 = recess.getMarker(map,'Recess Italian Ice Desserts');
  infowindows.push(infowindow21);
  markers.push(marker21);

	var marker22 = milknwood.getMarker(map,'Milk and Wood');
  infowindows.push(infowindow22);
  markers.push(marker22);

	var marker23 = tiger.getMarker(map,'Tiger Tea and Juice');
  infowindows.push(infowindow23);
  markers.push(marker23);

	var marker24 = whatever.getMarker(map,'What8ever Express');
  infowindows.push(infowindow24);
  markers.push(marker24);
  
  var marker25 = tswirl.getMarker(map,'T-Swirl Crepe');
  infowindows.push(infowindow25);
  markers.push(marker25);
  
  var marker26 = vans.getMarker(map,'Van\'s Bakery');
  infowindows.push(infowindow26);
  markers.push(marker26);
  
  var marker27 = mintsnhoney.getMarker(map,'Mints and Honey');
  infowindows.push(infowindow27);
  markers.push(marker27);
  
  var marker28 = milkncookie.getMarker(map,'Milk and Cookie Bar');
  infowindows.push(infowindow28);
  markers.push(marker28);
  
  var marker29 = cookiebar.getMarker(map,'Cookiebar');
  infowindows.push(infowindow29);
  markers.push(marker29);
  
  var marker30 = nekter.getMarker(map,'Nekter Juice Bar');
  infowindows.push(infowindow30);
  markers.push(marker30);
  
  var marker31= freshnation.getMarker(map,'Fresh Nation Desserts');
  infowindows.push(infowindow31);
  markers.push(marker31);

	var marker32 = bellygood.getMarker(map,'Belly Good Cafe and Crepes');
  infowindows.push(infowindow32);
  markers.push(marker32);
  
  var marker33 = tealyfe.getMarker(map,'Tealyfe');
  infowindows.push(infowindow33);
  markers.push(marker33);

var marker34 = popup.getMarker(map,'Pop Up Tea');
  infowindows.push(infowindow34);
  markers.push(marker34);

var marker35 = icicles.getMarker(map,'Icicles');
  infowindows.push(infowindow35);
  markers.push(marker35);

var marker36 = maven.getMarker(map,'Maven\’s Creamery');
  infowindows.push(infowindow36);
  markers.push(marker36);

var marker37 = honeyberry.getMarker(map,'Milk and Wood');
  infowindows.push(infowindow37);
  markers.push(marker37);

var marker38 = pop.getMarker(map,'Tiger Tea and Juice');
  infowindows.push(infowindow38);
  markers.push(marker38);

var marker39 = fantasia.getMarker(map,'What8ever Express');
  infowindows.push(infowindow39);
  markers.push(marker39);

var marker40 = tleaf.getMarker(map,'Tleaf Teapresso');
  infowindows.push(infowindow40);
  markers.push(marker40);

var marker41 = milkbomb.getMarker(map,'Milkbomb');
  infowindows.push(infowindow41);
  markers.push(marker41);

var marker42 = creamistry.getMarker(map,'Creamistry');
  infowindows.push(infowindow42);
  markers.push(marker42);

var marker43 = plentea.getMarker(map,'Plentea');
  infowindows.push(infowindow43);
  markers.push(marker43);

var marker44 = teasociety.getMarker(map,'Teasociety');
  infowindows.push(infowindow44);
  markers.push(marker44);

var marker45 = psycho.getMarker(map,'Psycho Donuts');
  infowindows.push(infowindow45);
  markers.push(marker45);

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
marker8.addListener('click', function() {
    infowindow8.open(map, marker8);
  });
   marker9.addListener('click', function() {
    infowindow9.open(map, marker9);
  });
   marker10.addListener('click', function() {
    infowindow10.open(map, marker10);
  });
  marker11.addListener('click',function() {
    infowindow11.open(map,marker11);
  });
   marker12.addListener('click',function() {
    infowindow12.open(map,marker12);
  });
  marker13.addListener('click',function() {
    infowindow13.open(map,marker13);
  });
  marker14.addListener('click',function() {
    infowindow14.open(map,marker14);
  });
  marker15.addListener('click',function() {
    infowindow15.open(map,marker15);
  });
  marker16.addListener('click',function() {
    infowindow16.open(map,marker16);
  });
  marker17.addListener('click',function() {
    infowindow17.open(map,marker17);
  });
  marker18.addListener('click',function() {
    infowindow18.open(map,marker18);
  });
   marker19.addListener('click',function() {
    infowindow19.open(map,marker19);
  });
  marker20.addListener('click',function() {
    infowindow20.open(map,marker20);
  });
  marker20.addListener('click',function() {
    infowindow20.open(map,marker20);
  });
	marker21.addListener('click',function() {
    infowindow21.open(map,marker21);
  });
	marker22.addListener('click',function() {
    infowindow22.open(map,marker22);
  });
	marker23.addListener('click',function() {
    infowindow23.open(map,marker23);
  });
	marker24.addListener('click',function() {
    infowindow24.open(map,marker24);
  });
  marker25.addListener('click',function() {
    infowindow25.open(map,marker25);
  });
  marker26.addListener('click',function() {
    infowindow26.open(map,marker26);
  });
  marker27.addListener('click',function() {
    infowindow27.open(map,marker27);
  });
  marker28.addListener('click',function() {
    infowindow28.open(map,marker28);
  });
  marker29.addListener('click',function() {
    infowindow29.open(map,marker29);
  });
  marker30.addListener('click',function() {
    infowindow30.open(map,marker30);
  });
  marker31.addListener('click',function() {
  	infowindow31.open(map,marker31);
  });
  marker32.addListener('click',function() {
  	infowindow32.open(map,marker32);
  });  
  marker33.addListener('click',function() {
    infowindow33.open(map,marker33);
  });
marker34.addListener('click',function() {
    infowindow34.open(map,marker34);
  });
marker35.addListener('click',function() {
    infowindow35.open(map,marker35);
  });
marker36.addListener('click',function() {
    infowindow36.open(map,marker36);
  });
marker37.addListener('click',function() {
    infowindow37.open(map,marker37);
  });
marker38.addListener('click',function() {
    infowindow38.open(map,marker38);
  });
marker39.addListener('click',function() {
    infowindow39.open(map,marker39);
  });
marker40.addListener('click',function() {
    infowindow40.open(map,marker40);
  });
marker41.addListener('click',function() {
    infowindow41.open(map,marker41);
  });
marker42.addListener('click',function() {
    infowindow42.open(map,marker42);
  });
marker43.addListener('click',function() {
    infowindow43.open(map,marker43);
  });
marker44.addListener('click',function() {
    infowindow44.open(map,marker44);
  });
marker45.addListener('click',function() {
    infowindow45.open(map,marker45);
  });
}
