import React, { useState } from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import { SliderItems } from '../data'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

` 

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.3;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    bottom: 70%;
    opacity: 0.5;
    width: 30px;
    height: 30px;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);

`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  max-width: 100%;
  filter: brightness(70%);

  @media only screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
    
  }
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: absolute;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }

`

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: white;
  font-weight: 600;
  font-size: 2.0rem;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }

`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`

const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  background-color: rgb(0, 171, 250);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    filter: brightness(80%);
  }

`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
      if(direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
      }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={ () => handleClick("left")}>
            <BsArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {SliderItems.map((item) => (
          <Slide>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>"Descubra o mundo com a gente!</Title>
            <Desc>{item.desc}</Desc>
            <Button>Explorar</Button>
          </InfoContainer>
          </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={ () => handleClick("right")}>
            <BsArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider