import styled from 'styled-components';
import { shade } from 'polished';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #15C3D6;
  max-width: 96px;
  width: 100%;
  height: 100vh;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
  }
`;

export const Footer = styled.footer`
  button {
    background: #12AFCB;
    width: 48px;
    height: 48px;
    border-radius: 15px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background-color 0.2s ;

    &:hover {
      background-color: ${shade(0.2, '#12AFCB')};
    }
  }
`;