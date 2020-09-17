function init() {
  const geocoder = new google.maps.Geocoder();
  // ##지도 주소 변환시 아래의 주소를 수정해 주시면 됩니다.
  geocoder.geocode({ address: "서울 특별시" }, function(results, status) {
    if (status === "OK") {
      createMap(results[0].geometry.location);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function createMap(location) {
  console.error('location', location);
  const map = new google.maps.Map(document.getElementById("mapArea"), {
    center: { lat: location.lat(), lng: location.lng() },
    zoom: 16,
    mapTypeControl: false
  });
}

init();
