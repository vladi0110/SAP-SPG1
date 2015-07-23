var JSON_url = './backend/data.json';

google.maps.event.addDomListener(window, 'load', initialize);


function changeDivContent() {
	document.getElementById("content").innerHTML = Date();
	document.getElementById("content").className = "content2";
}

function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		center: {lat: 42.644668, lng: 23.339851},
		zoom: 17
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
  	AJAX_JSON_Req(map);
}

function AJAX_JSON_Req(map) {
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", JSON_url, true);
    AJAX_req.setRequestHeader("Content-type", "application/json");
    AJAX_req.onreadystatechange = function() {
        if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
        	var response = JSON.parse(AJAX_req.responseText);
		for (var k in response.poi) {
			filterPOI(null, response.poi[k], map);
			for (var m in response.poi[k]) {
				var s = s + "<br />" + m + ": " + response.poi[k][m];
			}
		}
       }
    }
    AJAX_req.send();
	$(document).ready(function () {
	$( "#m1" ).click(function() {
		$( this ).toggleClass( "nav_item_selected" );
		filterPOI("Ключар", response.poi[k], map);
	});
});
}

function filterPOI(type, d, map) {
	if (d["type"]==type || d["type"]!=null) {
		addPOI(d, map);
		listPOI(d);		
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
}