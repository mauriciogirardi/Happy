import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiClock, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Map, Marker, TileLayer } from "react-leaflet";

import api from "../../services/api";
import mapicon from "../../utils/mapicon";
import SideBar from "../../components/SideBar";

import {
  Container,
  Main,
  OrphanageDetails,
  Images,
  ContainerMap,
  OpenDetails,
} from "./styles";

interface Orphanages {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  image: Array<{
    id: string;
    url: string;
  }>;
}

interface RouteParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<RouteParams>();
  const [orphanage, setOrphanage] = useState<Orphanages>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <SideBar />

      <Main>
        <img src={orphanage.image[activeImageIndex].url} alt={orphanage.name} />

        <Images>
          {orphanage.image.map((image, index) => (
            <button
              key={image.id}
              className={activeImageIndex === index ? "" : "active"}
              type="button"
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image.url} alt={orphanage.name} />
            </button>
          ))}
        </Images>

        <OrphanageDetails>
          <h1>{orphanage.name}</h1>
          <p>{orphanage.about}</p>

          <ContainerMap>
            <Map
              center={[orphanage.latitude, orphanage.longitude]}
              zoom={16}
              style={{ width: "100%", height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              className="map"
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={mapicon}
                position={[orphanage.latitude, orphanage.longitude]}
              />
            </Map>

            <footer>
              <a
                target="_blanck"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
              >
                Ver rotas no Google Maps
              </a>
            </footer>
          </ContainerMap>

          <hr />

          <h2>Instruções para visita</h2>
          <p>{orphanage.instructions}</p>

          <OpenDetails>
            <div>
              <FiClock size={32} color="#15B6D6" />
              Segunda á Sexta <br />
              {orphanage.opening_hours}
            </div>
            {orphanage.open_on_weekends ? (
              <div>
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
            ) : (
              <div className="not-weekends">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos <br />
                fim de semana
              </div>
            )}
          </OpenDetails>

          <a
            target="_blanck"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=${orphanage.whatsapp}`}
          >
            <FaWhatsapp size={20} color="#FFF" />
            Entrar em contato
          </a>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
