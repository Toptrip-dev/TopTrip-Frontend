import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { Routing } from 'react-leaflet-routing-machine';

const MapComponent = ({ startPoint, endPoint }) => {
  const mapRef = React.useRef(null);
  const routingRef = React.useRef(null);

  React.useEffect(() => {
    if (mapRef.current && startPoint && endPoint) {
      const leafletMap = mapRef.current.leafletElement;
      const waypoints = [
        [37.7749, -122.4194],
        [34.0522, -118.2437],
      ];

      if (routingRef.current) {
        leafletMap.removeControl(routingRef.current.getPlan());
      }

      routingRef.current = new Routing.control({
        waypoints,
      }).addTo(leafletMap);
    }
  }, [[34.0522, -118.2437], [34.0522, -118.2437]]);

  return (
    <Map
      center={[37.7749, -122.4194]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
    </Map>
  );
};

export default MapComponent;
