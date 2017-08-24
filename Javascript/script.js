function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(55.706406599999994, 9.5182865)
        , zoom: 10
        , mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}