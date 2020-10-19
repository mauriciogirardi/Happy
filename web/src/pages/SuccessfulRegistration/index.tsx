import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import ilustraTransSvg from "../../assets/Ilustra.svg";

import { Container } from "./styles";

const SuccessfulRegistration: React.FC = () => (
  <Container>
    <h1>
      Cadastro realizado <br /> com succeso.
    </h1>
    <img src={ilustraTransSvg} alt="Happy" />
    <Link to="/orphanagesMap">
      <FiArrowLeft size={32} color="#8D734B" />
    </Link>
  </Container>
);

export default SuccessfulRegistration;
