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
  { name: "Fortuna Centar",              address: "Kneza Mihaila bb, Aranđelovac",                        lat: 44.3069, lng: 20.5667 },
  { name: "Herba Sana – Amor Lux",       address: "Džordža Vašingtona 8–10, Beograd",                     lat: 44.8374, lng: 20.4056 },
  { name: "Bio Spajz",                   address: "Molerova 29a, Beograd",                                lat: 44.8023, lng: 20.4726 },
  { name: "Maslina",                     address: "Katanićeva 2, Beograd",                                lat: 44.7998, lng: 20.4711 },
  { name: "Moravski Market",             address: "Bate Jankovića 58, Čačak",                             lat: 43.8950, lng: 20.3506 },
  { name: "Tref",                        address: "Cara Lazara 40a, Čačak",                               lat: 43.8889, lng: 20.3482 },
  { name: "Kambucha Healthy Food",       address: "Bulevar Revolucije 24, Grocka",                        lat: 44.6743, lng: 20.7157 },
  { name: "Gram Shop",                   address: "Kneza Lazara L1/7, Jagodina",                          lat: 43.9858, lng: 21.2502 },
  { name: "Bio Kutak Zdrave Hrane",      address: "Bože Dimitrijevića bb, Kostolac",                      lat: 44.7183, lng: 21.1737 },
  { name: "BioMax Life",                 address: "Crvenog Barjaka 7, Kragujevac",                        lat: 44.0106, lng: 20.9131 },
  { name: "Joker Plus",                  address: "Pijaca Aerodrom, Sindjelićeva bb, Kragujevac",          lat: 44.0054, lng: 20.9311 },
  { name: "BioLand KV",                  address: "Vojvode Putnika bb, TC Danica Lokal 10, Kraljevo",      lat: 43.7235, lng: 20.6937 },
  { name: "Bio line – Ekoline DOO",      address: "Trg Fontane 12, Kruševac",                             lat: 43.5826, lng: 21.3265 },
  { name: "Hedera Vita Healthy Concept", address: "Trg Vuka Karadžića 5, Loznica",                        lat: 44.5343, lng: 19.2237 },
  { name: "Magic Food Plus",             address: "Cara Dušana 54–58, Dušanov Bazar lokal 3, Niš",        lat: 43.3173, lng: 21.8984 },
  { name: "Beyond",                      address: "Vožda Karađorđa 76b, Niš",                             lat: 43.3202, lng: 21.9025 },
  { name: "Zdrava Hrana – Noma Sport",   address: "Ignjata Pavlasa 2, Novi Sad",                          lat: 45.2557, lng: 19.8495 },
  { name: "Priroda SZTR",                address: "Limanska pijaca, Lokal 48, Bulevar Cara Lazara 50, Novi Sad", lat: 45.2472, lng: 19.8478 },
  { name: "Zalogajčić 021",              address: "Železnička 46, Novi Sad",                               lat: 45.2488, lng: 19.8401 },
  { name: "Kuća Zdravlja",               address: "Nikole Pašića bb, Paraćin",                            lat: 43.8607, lng: 21.4124 },
  { name: "Bio Market 012",              address: "Stari Korzo 37, Požarevac",                             lat: 44.6210, lng: 21.1872 },
  { name: "Dobos",                       address: "Jovana Cvijića 2, Lokal 15, Smederevo",                 lat: 44.6628, lng: 20.9279 },
  { name: "Mrvica D",                    address: "Trg Svetog Save 4, Užice",                              lat: 43.8566, lng: 19.8427 },
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
