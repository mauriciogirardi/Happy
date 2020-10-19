import styled from 'styled-components';
import ilustraSvg from '../../assets/Ilustra.svg'
import ilustraTransSvg from '../../assets/Ilustra01.svg'

export const Background = styled.div`
  background:  linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  max-height: 680px;

  padding: 50px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: url(${ilustraSvg}) no-repeat 60% center;
  background-size: contain;

  @media (max-width: 668px) {
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  @media (max-width: 1031px) {
    background: url(${ilustraTransSvg}) no-repeat 60% center;
    background-size: contain;
  }
  
  a {
    width: 80px;
    height: 80px;
    border-radius: 30px;
    background-color: #FFD666;
    display: flex;
    align-items:center;
    justify-content: center;

    position: absolute;
    bottom: 50px;
    right: 50px;

    @media (max-width: 668px) {
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    transition: background-color 0.2s;

    svg {
      color: #8D734B;
      font-size: 32px;
    }

    &:hover {
      background-color: #96fedd;
    }
  }

  & > p  {
    font-size: 24px;
    text-align: right;
    position: absolute;
    top:  50px;
    right: 50px;

    @media (max-width: 668px) {
     font-size: 16px;
     right: 20px;
     top: 20px;
    }
  }
`;

export const Header = styled.header``;


export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 74px;
  }

  h1 {
    font-weight: 800;
    font-size: 55px;
    margin-left: 20px;
  }

  @media (max-width: 668px) {
    h1 {
      font-size: 20px;
      margin-left: 10px;
    }
    img {
      width: 20px;
    }

    position: absolute;
    top: 0;
    left: 20px;
  }
`;

export const Content = styled.section`
  main {
    max-width: 350px;
    width: 100%;

    h1 {
      font-weight: 900;
      font-size: 70px;
      line-height: 60px;
    }

    p {
      max-width: 350px;
      width: 100%;
      margin-top: 30px;
      font-size: 24px;
    }
  }

`;