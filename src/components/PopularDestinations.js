import React from 'react'
import styled from 'styled-components'
import { Destinations } from '../data'

const Section = styled.section``

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
`

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
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: rgb(215, 218, 223);
  width: 430px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;
  transition: 1.5s;
  &:hover{
    transform: scale3d(1.1, 1.1, 1);
  }

  @media only screen and (max-width: 768px) {
        width: 65%;
    }
`;


const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 100%;
`;

const Name = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
`;

const Country = styled.img `
  width: 35px;
  height: 20px;
  object-fit: cover;
`


const Description = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: bold;
    }
 `

const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  margin-top: 5%;
  background-color: #09599C;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.0rem;
  cursor: pointer;
  transition: 1.5s;
  &:hover{
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const PopularDestinations = () => {
  return (
    <Section>
      <Title>Destinos Populares</Title>
      <Grid>
        {Destinations.map((destination, index) => (
          <Card key={index}>
            <Image src={destination.img} alt={destination.name} />
            <Name>{destination.name}</Name>
            <Country src={destination.country}></Country>
            <Description>{destination.description}</Description>
          </Card>
        ))}
      </Grid>
      <Button>ver mais</Button>
    </Section>
  )
}

export default PopularDestinations