var JSON_url = 'http://localhost:8000/jsondata';
var POIDATA = [];
var MARKERS = [];

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		center: {lat: 42.644668, lng: 23.339851},
		zoom: 17
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
  	AJAX_JSON_Req(map);
  	
  	
	$( "#menu .nav_item" ).click(function(e) {
		$( "#menu .nav_item" ).removeClass("nav_item_selected");
		$(this).toggleClass( "nav_item_selected" );
		
		for(var n = 0; n<POIDATA.length; n++) { 
			if (POIDATA[n]["type"]=="Ключар") {
				var $poi=$('#poi');
				var filter = $(this).attr('data-filter');
				renderPOIS(filter, map);
			}
		}
});
}

function setAllMap() {
  for (var i = 0; i < MARKERS.length; i++) {
    MARKERS[i].setMap(null);
  }
}
function renderPOIS(filter, map) {
	setAllMap();
	$('#poi').html('');
	
	for (var k in POIDATA) {
		filterPOI(filter, POIDATA[k], map);
	}	 
}

function AJAX_JSON_Req(map) {
	$.ajax({ url: JSON_url }).done(function(data) {
		POIDATA = data.poi;
		
		renderPOIS(null, map);
	});
}

function filterPOI(type, poi, map) {
	
	if (poi["type"]===type || type===null) {
		addPOI(poi, map);
		listPOI(poi);		
		console.log(poi['type'], type);
	}
}

function listPOI(d){
	var $poi=$('#poi');
	$poi.append('<li>'+
	'<span class="info-content">'+
        '<h1 class="marker-heading">'+d["name"]+'</h1><p>'+d["working_hours"]+'<br />'+d["address"]+'<br />'+d["description"]+'</p>'+
        '<img src="https://maps.googleapis.com/maps/api/streetview?size=240x120&location='+d["latitude"]+','+d["longitude"]+'">'+ 
//        '<button data-id='+d["id"]+' class="show_more">Show more</button>' +
        '</span>'+	
	'</li>');
}

function addPOI(d, map) {
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(d["latitude"], d["longitude"]),
		map: map,
		title: d["name"] + "\n" + d["working_hours"] + "\n" + d["address"] + "\n" + d["description"]
	});
  var contentString = d["name"] + "<br>" + d["working_hours"] + "<br>" + d["address"] + "<br>" + d["description"];
        var contentString = '<div class="marker-info-win">'+
        '<div class="marker-inner-win"><span class="info-content">'+
        '<h1 class="marker-heading">'+d["name"]+'</h1><p>'+d["working_hours"]+'<br />'+d["address"]+'<br />'+d["description"]+'</p>'+
        '<img src="https://maps.googleapis.com/maps/api/streetview?size=240x120&location='+d["latitude"]+','+d["longitude"]+'">'+ 
        '</span>'+
        '</div></div>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  MARKERS.push(marker)
}