import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Heading } from "../Heading";

import * as S from "./styles";

const Location = () => (
  <S.Container>
    <Heading>Onde Estamos</Heading>
    <div className="test" style={{ height: "44rem", background: "aqua" }}>
      <MapContainer
        center={[-10.2514431, -48.3233001]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        // dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        <Marker position={[-10.251654251190171, -48.32356832089187]} >
          <Popup>
            AD ARSE 112. <br /> A IGREJA DA COMUNHÃO.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  </S.Container>
);

export default Location;
