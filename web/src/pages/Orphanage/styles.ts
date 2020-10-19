import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  max-width: 708px;
  width: 100%;
  margin: 80px auto;
  background-color: #fff;
  border-radius: 20px;

  img {
    width: 100%;
    height: 335px;
    object-fit: cover;
    border-radius: 20px 20px  0 0;
  }
`;

export const OrphanageDetails = styled.div`
  padding: 40px 80px;

   h1 {
     color: #4D6F80;
     font-size: 44px;
   }

   h2 {
     color: #4D6F80;
     font-size: 30px;
   }

   p {
    color: #4D6F80;
    font-weight: 400;
    font-size: 18px;
   }

   hr {
    margin: 90px  0 50px 0;
    border:1px solid  #D3E2E5;
   }

   > a {
    width: 100%;
    height: 64px;
    background-color: #3CDC8C;
    border-radius: 20px;
    color: #fff;
    border: 0;
    font-size: 18px;
    font-weight: 900;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ;

    &:hover {
      background-color: ${shade(0.02, '#3CDC8C')};
    }

    svg  {
      margin-right: 10px;
    }
   }
`;

export const Images = styled.div`
  max-width: 644px;
  width: 100%;
  margin: 15px auto;
  
  .active {
    opacity: 50%;
  }

  button {
    width: 94px;
    height: 94px;
    border-radius: 20px;
    border: 0;
    background: transparent;

    & + button {
      margin-left: 10px
    }

    img {
      width: 94px;
      height: 94px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;

export const ContainerMap = styled.div`
  position: relative;
  margin: 60px 0;

  .map {
    border-radius: 20px;
  }
  
  footer {
    border: 1px solid #B3DAE2;
    background-color: #E6F7FB;
    border-radius: 20px;
    width: 100%;
    height: 100px;

    position: absolute;
    bottom: -50px;
    left: 0;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    a {
      color: #0089A5;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

export const OpenDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
    border: 1px solid #B3DAE2;
    border-radius: 20px;
    color: #15B6D6;
    width: 264px;
    height: 176px;
    padding: 40px 30px;
    margin: 30px 0 50px 0;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  div + div {
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    border: 1px solid #A1E9C5;
    color: #39CC83;
  }

  div.not-weekends  {
    background: linear-gradient(154.16deg, #FFE4EE 7.85%, #FFFFFF 91.03%);
    border: 1px solid #FF669D;
    color: #FF669D;
  }
`;
