"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export type Stockist = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

const stockists: Stockist[] = [
  // pins will be added here
];

const pinIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:12px;height:12px;background:#1E3A1E;border-radius:50%;border:2px solid #3D7A3D;box-shadow:0 1px 4px rgba(0,0,0,0.25);"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -10],
});

export default function StockistsMap() {
  useEffect(() => {
    // suppress Leaflet's default icon path resolution in Next.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
  }, []);

  return (
    <MapContainer
      center={[44.0165, 21.0059]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stockists.map((s) => (
        <Marker key={s.name} position={[s.lat, s.lng]} icon={pinIcon}>
          <Popup>
            <span style={{ fontFamily: "sans-serif", fontSize: "13px" }}>
              <strong>{s.name}</strong>
              <br />
              {s.address}
            </span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
