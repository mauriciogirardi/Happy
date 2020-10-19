import React from "react";
import { BrowserRouter } from "react-router-dom";
import StylesGlobal from "./layout/styles/global";

import Routes from "./routes";

import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  return (
    <>
      <StylesGlobal />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
