import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'
import { BsFillCartFill} from 'react-icons/bs'

const Container = styled.div`
    height: 60px;
    background-color: snow;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
  }
`


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 18px;   
    cursor: pointer;
    margin-left: 15px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-left: 8px;
    }
`

const SearchContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;   

    @media (max-width: 768px) {
      margin-left: 0;
      flex: 1;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;

    @media (max-width: 768px) {
      flex: 2;
    }
`

const Input = styled.input`
    font-family: 'Urbanist';
    text-align: center;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 250px;

    @media (max-width: 768px) {
      width: 100%;
    }
`

const Navbar = () => {
  return (
    <Container>
            <Wrapper>
        <Left>
            <SearchContainer>
                <Input placeholder='Pesquisar' />
                <BsSearch style={{color:'black', fontSize:15, marginLeft:8}}/>
            </SearchContainer>
        </Left>
        <Right>
            <MenuItem>Destinos</MenuItem>
            <MenuItem>Acomodações</MenuItem>
            <MenuItem>Cadastro</MenuItem>
            <MenuItem>Login</MenuItem>
        </Right>
            </Wrapper>
    </Container>
  )
}

export default Navbar