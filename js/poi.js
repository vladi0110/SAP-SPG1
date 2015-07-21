function changeDivContent() {
	document.getElementById("content").innerHTML = Date();
	document.getElementById("content").className = "content2";
}

function initialize() {
	var mapOptions = {
		center: { lat: 42.65703, lng: 23.35661},
		zoom: 16
	};
	var myLatlng1 = new google.maps.LatLng(42.65705, 23.35704);
	var myLatlng2 = new google.maps.LatLng(42.65703, 23.35833);
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng1,
		map: map,
		title: 'Банкомат\nSG Express Bank'
  	});
	var marker = new google.maps.Marker({
		position: myLatlng2,
		map: map,
		title: 'Копирен център\nЦени: А4 4ст.'
  	});
}

function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
        	var response = JSON.parse( AJAX_req.responseText );
		document.getElementById("poi").innerHTML = "Име: " + response.poi[0].name + "<br />Адрес: " + response.poi[0].address + "<br />Работно време: " + response.poi[0].working_hours;
       }
    }
    AJAX_req.send();
}

google.maps.event.addDomListener(window, 'load', initialize);

AJAX_JSON_Req( './backend/data.json' );