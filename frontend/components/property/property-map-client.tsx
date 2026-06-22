"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Icon } from "leaflet";

type Props = {
  lat: number;
  lng: number;
  title: string;
};

export default function PropertyMapClient({ lat, lng, title }: Props) {
  const [markerIcon, setMarkerIcon] = useState<Icon | null>(null);

  useEffect(() => {
    // Leaflet must only be used in browser — import dynamically to avoid SSR crash
    import("leaflet").then((L) => {
      setMarkerIcon(
        new L.Icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      );
    });
  }, []);

  if (!markerIcon) return null;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom
      className="h-[400px] w-full rounded-2xl"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}