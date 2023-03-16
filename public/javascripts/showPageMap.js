mapboxgl.accessToken = mapBoxToken;
 
const temp= JSON.parse(campground)
const coordinates = temp.geometry.coordinates
 
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});
 
new mapboxgl.Marker()
    .setLngLat([-74.5, 40])
    .addTo(map)
