"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  position: LatLngTuple | LatLngExpression;
  zoom?: number;
}

const DEFAULT_ZOOM = 19;

const Map = ({ position, zoom = DEFAULT_ZOOM }: MapProps) => {
  return (
    <MapContainer
      attributionControl={false}
      center={position}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} draggable={false}>
        <Popup>Bookclub Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
