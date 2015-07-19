function changeDivContent() {
	document.getElementById("content").innerHTML = Date();
	document.getElementById("content").className = "content2";
}

function initialize() {
	var mapOptions = {
		center: { lat: 42.65703, lng: 23.35661},
		zoom: 16
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);