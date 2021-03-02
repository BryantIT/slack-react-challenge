import { React } from 'react'
import styled from 'styled-components'
// Material Ui
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {
  const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const Main = styled.div`
    display: flex;
  `
  const SearchContainer = styled.div`
    min-width: 400px;
  `
  const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 71 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
      background-color: transparent;
      border: none;
      padding-left: 8px;
      padding-right: 8px;
      color: white;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    input:focus {
      outline: none;
    }
  `
  const UserContainer = styled.div`
    display: flex;
    align-items: center;
  `
  const Name = styled.div`

  `
  const UserImage = styled.div`

  `
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
      <SearchContainer>
        <Search>
          <input type="text" placeholder="Search..." />
        </Search>
      </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>
          Bryant
        </Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="user" />
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header