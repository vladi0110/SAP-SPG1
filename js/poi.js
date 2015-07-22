var JSON_url = './backend/data.json';

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.trigger(map, "resize");

function changeDivContent() {
	document.getElementById("content").innerHTML = Date();
	document.getElementById("content").className = "content2";
}

function initialize() {
	var mapOptions = {
//		center: {lat: 42.65703, lng: 23.35661},
		center: {lat: 42.644668, lng: 23.339851},
		zoom: 16
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	new google.maps.Marker({
		position: new google.maps.LatLng(42.65705, 23.35704),
		map: map,
		title: 'Банкомат\nSG Express Bank'
  	});
	new google.maps.Marker({
		position: new google.maps.LatLng(42.65703, 23.35833),
		map: map,
		title: 'Копирен център\nЦени: А4 4ст.'
  	});
  	AJAX_JSON_Req(map);
}

function AJAX_JSON_Req(map) {
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", JSON_url, true);
    AJAX_req.setRequestHeader("Content-type", "application/json");
    AJAX_req.onreadystatechange = function() {
        if(AJAX_req.readyState == 4 && AJAX_req.status == 200) {
        	var response = JSON.parse(AJAX_req.responseText);
		for (var k in response.poi) {
			addPOI(response.poi[k], map);
				for (var m in response.poi[k]) {
					var s = s + "<br />" + m + ": " + response.poi[k][m];
				}
		}
       }
    }
    AJAX_req.send();
}

function addPOI(d, map) {
	new google.maps.Marker({
		position: new google.maps.LatLng(d["latitude"], d["longitude"]),
		map: map,
		title: d["name"] + "\n" + d["working_hours"] + "\n" + d["address"] + "\n" + d["description"]
	});
}