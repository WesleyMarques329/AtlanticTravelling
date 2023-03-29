import React from 'react'
import styled from 'styled-components'
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";


const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 250px;
    background-color: #222;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

const FooterLink = styled.a`
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: white;
    font-size: 1.0rem;
    padding: 5px;
    &:hover {
        color: purple;
    }

    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        padding: 3px;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        padding: 10px 20px;
  }
`

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
        padding: 10px 20px;
        justify-content: space-around;
    }
`

const Title = styled.h2`
    font-family: 'Raleway', sans-serif;
    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`

const TitleIcons = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4rem;
    color: white;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`

const Middle = styled.div`
    display: flex;
    flex-direction: column;
`

const ColumnIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FooterIcons = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    padding: 20px 0;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
`
const FooterLinkIcon = styled.a`
    color: black;
    list-style: none;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background-color: white;
    transition: 0.5s;
    transform: translate(0, 0px);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    &:hover {
        transform: translate(0, -10px);
    }

`

const Footer = () => {
  return (
<FooterContainer>
    <Left>
        <FooterLink href="#">Termos de Serviço</FooterLink>
        <FooterLink href="#">Política de Privacidade</FooterLink>
        <FooterLink href="#">Contato</FooterLink>
        <FooterLink href="#">Quem somos</FooterLink>
        <FooterLink href="#">Destinos</FooterLink>
        <FooterLink href="#">Hoteis</FooterLink>
        <FooterLink href="#">Reserve já</FooterLink>
    </Left>
        <Middle>
        <Title>Contato</Title>
        <FooterLink href="#">Central de atendimento</FooterLink>
        <FooterLink href="#">Fale Conosco</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
        </Middle>
    <Right>
        <ColumnIcons>
        <TitleIcons>Redes Sociais</TitleIcons>
            <FooterIcons>
                <FooterLinkIcon href='https://www.instagram.com/wesleymarquesz/'>
                <BsInstagram/>
                </FooterLinkIcon>

                <FooterLinkIcon href='https://github.com/WesleyMarques329'>
                <BsGithub />
                </FooterLinkIcon>

                <FooterLinkIcon href='#'>
                <BsTwitter />
                </FooterLinkIcon>

                <FooterLinkIcon href='https://www.linkedin.com/in/wesleymarques329/'>
                <BsLinkedin />
                </FooterLinkIcon>
                
            </FooterIcons>
        </ColumnIcons>
    </Right>
</FooterContainer>
  )
}

export default Footer