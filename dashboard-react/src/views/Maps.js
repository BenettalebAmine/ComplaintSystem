import React from "react";

// react-bootstrap components
import { getAllComplaintsLocation } from "services/Dashboard-service";
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoieGVub3Bob2JlIiwiYSI6ImNremhvZmYzcTF5OXcydW82cWZqcTRpZnQifQ.JnfdlxArrZw1RTtbKQU4oQ';

function Maps() {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
const [lng, setLng] = React.useState(-6.8498);
const [lat, setLat] = React.useState(33.9716);
const [zoom, setZoom] = React.useState(20);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
    });
  


getAllComplaintsLocation().then(r => {

  let locations=r.data;
  console.log(locations);

  if(locations!==null){
 
   // map.current.center=[locations[0].longitude, locations[0].latitude];

    locations.forEach(location => {
      let markerColor={color:'blue'};
      if(location.complaintType==="DECHETS") markerColor={color:'black'};
      else if(location.complaintType==="ELECTRICITE") markerColor={color:'yellow'};
      new mapboxgl.Marker(markerColor)
      .setLngLat([location.longitude, location.latitude])
       .addTo(map.current);
  });
  }
  
})  
  }, []);
  return (
    <>
      <div className="map-container">
        <div id="map" ref={mapContainer}></div>
      </div>
    </>
  );
}

export default Maps;
