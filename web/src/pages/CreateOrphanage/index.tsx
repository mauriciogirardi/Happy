import React, { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

import mapicon from "../../utils/mapicon";
import SideBar from "../../components/SideBar";
import SuccessfulRegistration from "../SuccessfulRegistration";
import api from "../../services/api";

import {
  Container,
  Form,
  Main,
  BoxInput,
  BoxButtonImage,
  BoxButton,
  ButtonSubmit,
  LineBotton,
  ImageContainer,
} from "./styles";

const CreateOrphanage: React.FC = () => {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(e: LeafletMouseEvent) {
    const { lat, lng } = e.latlng;
    setPosition({ latitude: lat, longitude: lng });
  }

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const selectImages = Array.from(e.target.files);

    setImages(selectImages);

    const selectImagesPreview = selectImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectImagesPreview);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("whatsapp", whatsapp);
    data.append("instructions", instructions);
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("orphanages", data);

    history.push("/successful");
  }

  return (
    <Container>
      <SideBar />

      <Main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>
            <LineBotton />

            <Map
              center={[-26.32065, -48.8628041]}
              zoom={13}
              style={{ width: "100%", height: 280 }}
              className="map"
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                position={[position.latitude, position.longitude]}
                icon={mapicon}
                interactive={false}
              />
            </Map>

            <BoxInput>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor="whatsapp">Número de Whatsapp</label>
              <input
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </BoxInput>

            <BoxButtonImage>
              <label htmlFor="images[]">Fotos</label>
              <ImageContainer>
                {previewImages.map((image) => (
                  <img key={image} src={image} alt={name} />
                ))}

                <label htmlFor="images[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </ImageContainer>
              <input
                multiple
                type="file"
                id="images[]"
                style={{ visibility: "hidden" }}
                onChange={handleSelectImages}
              />
            </BoxButtonImage>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>
            <LineBotton />

            <BoxInput>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
              />
            </BoxInput>

            <BoxButton>
              <label htmlFor="open_on_weekends">Atende fim de semana?</label>

              <div>
                <button
                  className={open_on_weekends ? "active" : ""}
                  type="button"
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  className={!open_on_weekends ? "active" : ""}
                  type="button"
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </BoxButton>
          </fieldset>

          <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
