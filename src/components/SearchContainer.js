import React from 'react'
import styled from 'styled-components'
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

const Body = styled.body`
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1.0rem;
  }
`

const SearchMenu = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80%;
  height: 150px;
  padding: 10px;
  border-radius: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 30px;
    border-radius: 0;
    top: initial;
    bottom: 0;
  }
`
const TravelSearch = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  display: flex;
  margin-left: 40px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const TravelInput = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  text-align: center;
  width: 180px;
  &:focus {
    outline: none;
  }
`

const TravelButton = styled.button`
  font-family: 'Raleway', sans-serif;
  background-color: rgb(0, 171, 250);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
  &:hover{
    filter: brightness(80%);
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const SearchContainer = () => {
  return (
  <Container>
    <SearchMenu>
      <Title>Para onde você está voando?</Title>
      <TravelSearch>
        <IoLocationSharp style={{fontSize:'20px', marginLeft: 5}}/>
        <TravelInput type="text"  placeholder="Onde você está?" />
      </TravelSearch>

      <TravelSearch>
      <GiAirplaneDeparture style={{fontSize:'20px', marginLeft: 5}}/>
      <TravelInput type="text"  placeholder="Para onde você vai?" />
      </TravelSearch>
      
      <TravelSearch>
      <TravelInput type="date" />
      </TravelSearch>

      <TravelButton>Buscar</TravelButton>
    </SearchMenu>
    </Container>
  )
}

export default SearchContainer