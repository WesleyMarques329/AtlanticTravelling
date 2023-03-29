import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, rgb(0, 171, 250), rgb(0,116,212));
  padding: 24px;
  padding-top: 5%;
  padding-bottom: 10%;

  @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 28px;
    color: black;
    margin-bottom: 16px;

    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
`;

const Button = styled.button`
  text-align: center;
  background-color: #09599C;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  margin-left: 10px;

  &:hover {
    background-color: #0066aa;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
       margin-top: 20px;
    }
`;

const InputBtn = styled.input`
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-align: center;
    height: 50px;
    width: 450px;
    border-radius: 5px;
    border: none;

    @media only screen and (max-width: 768px) {
        width: 350px;
    }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Ofertas e muito mais!</Title>
      <Text>Receba nossas melhores ofertas de viagem diretamente na sua caixa de entrada.</Text>
      <form>
        <InputBtn type="email" placeholder="Digite seu e-mail" />
        <Button type="submit">Inscreva-se</Button>
      </form>
    </Container>
  );
};

export default Newsletter;
