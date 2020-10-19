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
  overflow: hidden;
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 20px;
  padding: 60px 50px;
  max-width: 708px;
  width: 100%;

  .map {
    border-radius: 20px;
    margin: 40px 0;
    border: 1px solid #D3E2E5;
    cursor: pointer;
  }

  fieldset {
    border: 0;
    
  }

  fieldset + fieldset {
    margin-top: 40px;
  }

  legend {
    color: #4D6F80;
    font-size: 32px;
    font-weight: bold;
    width: 100%;
  }
`;

export const LineBotton = styled.div`
  border-bottom: 1px solid #D3E2E5;
  margin-top: 15px;
`;

export const BoxInput = styled.div`
  label {
    display: block;
    color: #8FA7B2;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0 5px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }

  input  {
    background-color: #F5F8FA;
    border: 1px solid #D3E2E5;
    width: 100%;
    height: 60px;
    border-radius: 20px;
    padding-left: 16px;

    & + input {
      margin-bottom: 20px;
    }
  }

  textarea  {
    background-color: #F5F8FA;
    border: 1px solid #D3E2E5;
    width: 100%;
    height: 120px;
    border-radius: 20px;
    padding: 16px;
    resize: none;
  }
`;

export const BoxButtonImage = styled.div`
 > label {
    display: block;
    color: #8FA7B2;
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0 5px 0;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  display: flex;
  align-items: center;

  label {
    border-radius: 20px;
    border: 1px dashed #15B6D6;
    background-color: #F5F8FA;
    width: 96px;
    height: 96px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 96px;
    height: 96px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const BoxButton = styled.div`
 label {
    display: block;
    color: #8FA7B2;
    font-size: 16px;
    font-weight: 600;
    margin: 25px 0 10px 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    border-radius: 20px;
    border: 1px solid #84ffd4;
    background-color: #e5fcf4;
    color: #8FA7B2;
    width: 100px;
    height: 44px;
    transition: all 0.2s ;

    &.active {
      background-color: #37C77F;
      color: #fff;
    }

    &:hover {
    background-color: ${shade(0.04, '#37C77F')};
    color: #fff;
  }
   
  }

  button + button {
    border: 1px solid #fc9f9f;
    background-color: #ffdddd;
    margin-left: 10px;

    &.active {
      background-color: #ea5959;
      color: #fff;
    }

    &:hover {
    background-color: ${shade(0.04, '#ea5959')};
    color: #fff;
  }
   
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #37C77F;
  border: 0;
  border-radius: 20px;
  color: #fff;
  font-weight: 900;
  font-size: 18px;
  margin-top: 40px;
  width: 100%;
  height: 64px;
  transition: background-color 0.2s ;

  &:hover {
    background-color: ${shade(0.05, '#3EE08F')};
  }
   
`;