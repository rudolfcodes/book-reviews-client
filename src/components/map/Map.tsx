"use client";
import { useState, useEffect, useRef } from "react";
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

export default function Map({ position, zoom = DEFAULT_ZOOM }: MapProps) {
  const [isClient, setIsClient] = useState(false);
  const mapIdRef = useRef<string>(`map-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    setIsClient(true);
    // Cleanup function to remove the map container on unmount
    return () => {
      const container = document.getElementById(mapIdRef.current);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <div id={mapIdRef.current} style={{ height: "100%", width: "100%" }}>
      <MapContainer
        attributionControl={false}
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%", zIndex: 20 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} draggable={false}>
          <Popup>Bookclub Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
