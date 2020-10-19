import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import localSvg from "../../assets/Local.svg";

import { Background, Container, Content, Header, Logo } from "./styles";

const Landing: React.FC = () => {
  return (
    <Background>
      <Container>
        <Header>
          <Logo>
            <img src={localSvg} alt="Happy" />
            <h1>happy</h1>
          </Logo>
        </Header>

        <Content>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
        </Content>

        <p>
          <strong>Joinville</strong>
          <br />
          Santa Catarina
        </p>

        <Link to="/orphanagesMap">
          <FiArrowRight />
        </Link>
      </Container>
    </Background>
  );
};

export default Landing;
