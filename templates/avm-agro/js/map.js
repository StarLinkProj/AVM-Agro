function initialize() {
    var settings = {
        zoom: 15,
        center: new google.maps.LatLng(50.39996167, 30.67485118),
        mapTypeControl: false,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), settings);

    var companyPos = new google.maps.LatLng(50.39366954, 30.68862701);
    var companyLogo = new google.maps.MarkerImage('/images/map/map-cursor.png',
        new google.maps.Size(100,120),
        new google.maps.Point(0,0),
        new google.maps.Point(55,97)
    );
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyLogo,
        title:"Company Title",
    });

}