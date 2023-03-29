import React from 'react';
import styled from 'styled-components';
import { bestHotels } from '../data';
import { AiFillStar } from "react-icons/ai";

const Section = styled.section`
  margin-top: 10%;
  padding: 50px 0;
  background-color: rgb(0, 171, 250);

`;

const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


const Card = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: rgb(215, 218, 223);
  width: 430px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 65%;
  }
`;

const Flag = styled.img`
  width: 30px;
  height: 20px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  max-width: 100%;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Location = styled.p`
  font-size: 1.2rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  background-color: #09599C;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 1.0rem;
  cursor: pointer;
  transition: 1.5s;
  &:hover{
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const Accommodations = () => {
  return (
    <Section>
      <Title>Encontre as melhores hospedagens para a sua viagem</Title>
      <Grid>
        {bestHotels.map((hotel, index) => (
          <Card key={index}>
          <Image src={hotel.img} alt={hotel.name} />
          <Name>{hotel.name}</Name>
          <Location>{hotel.location}</Location>
          <Flag src={hotel.country} alt="Country Flag" />
          <Price>{hotel.price}</Price>
          <Button>Reservar</Button>
        </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Accommodations;
