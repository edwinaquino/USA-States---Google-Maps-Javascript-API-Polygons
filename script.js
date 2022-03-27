// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    let statesObj = $.getJSON("states.json", function (data) {
        return data;
        //console.log(data);
    });

        statesObj.done(function (data) {
            renderMap(data);
        })
}
function renderMap(data) {
    // https://developers.google.com/maps/documentation/javascript/examples/polygon-simple
    let mapContainer = $("map");
    console.log('line 14 data=', data);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.4,
        center: { lat: 39.535681, lng: -96.965892 },
        mapTypeId: "roadmap"
    });
    for (let [index, state] of Object.entries(data)) {
        console.log('line 22 state=', state);
        // Construct the polygon.
        const bermudaTriangle = new google.maps.Polygon({
            paths: state.path,
            strokeColor: state.color,
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: state.color,
            fillOpacity: 0.5,
        });

        bermudaTriangle.setMap(map);
    }
}