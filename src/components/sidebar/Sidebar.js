import { React } from 'react'
import styled from 'styled-components'
// MaterialUI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Sidebar() {
  const Container = styled.div`
    background: #3F0E40;
  `
  const WorkSpaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
  `
  const Name = styled.div`

  `
  const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background-color: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
  `
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>
          CodeNinja
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
    </Container>
  )
}

export default Sidebar
