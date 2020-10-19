import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  a {
    background: #15C3D6;
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    position: absolute;
    right: 50px;
    bottom: 50px;

    transition: background-color 0.2s ;

    &:hover {
      background-color: ${shade(0.2, '#15C3D6')};
    }
  }

  .map-popup .leaflet-popup-content-wrapper{
    background-color: rgba(255,255,255,0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  .map-popup .leaflet-popup-content{
    color: #0089a5;
    font-size: 17px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .map-popup .leaflet-popup-content  a {
    position: inherit;
    width: 40px;
    height: 40px;
    background-color: #15C3D6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23,142,166,0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center; 

    transition: background-color 0.2s ;
  }

  .map-popup .leaflet-popup-content a:hover {
      background-color: ${shade(0.2, '#15C3D6')};
    }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background:  linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  max-width:  250px;
  width: 100%;

  h2 {
    font-size: 40px;
    line-height:  42px;
    font-weight: 800;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  max-width: 200px;
  width: 100%;

  strong {
    font-weight: 800;
  }
`;
