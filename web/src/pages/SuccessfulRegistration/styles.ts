import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 300px;
  }

  h1 {
    margin-bottom: 50px;
  }

  a {
    margin-top: 50px;
    width: 80px;
    height: 80px;
    border-radius: 30px;
    background-color: #FFD666;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: #96fedd;
    }
  }
`;

