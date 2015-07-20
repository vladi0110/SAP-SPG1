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

google.maps.event.addDomListener(window, 'load', initialize);