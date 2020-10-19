import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import localSvg from "../../assets/Local.svg";

import { Aside, Footer } from "./styles";

const SideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={localSvg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Aside>
  );
};

export default SideBar;
