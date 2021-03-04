import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
// MaterialUI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import styles from './mystyle.module.css'
// Firebase
import db from '../../firebase'
// Test Data
import { sidebarItems } from '../../data/SideBarData'

// Styling
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
const MainChannels = styled.div`
padding-top: 20px;
`
const MainChannelItem = styled.div`
color: rgb(188,171,188);
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover {
  background: #350d36
}
`
const ChannelsContainer = styled.div`
color: rgb(188,171,188);
margin-top: 10px;
`
const NewChannelContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 28px;
padding-left: 19px;
padding-right: 12px;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
height: 28px;
display: flex;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover {
  background: #350d36
}
`


//Component
function Sidebar(props) {
  const [channels, setChannels] = useState([])

  const addChannel = () => {
    const promptName = prompt('Enter Channel Name')
    if(promptName){
      db.collection('rooms').add({
        name: promptName
      })
    }
  }

  useEffect(() => {
    if(props){
      setChannels(props.channels)
    }
  }, [props])

  console.log(channels, 'In chat')

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
      <MainChannels>
        {
          sidebarItems.map(item => (
            <MainChannelItem>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))
        }
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon onClick={addChannel} className={styles.add} />
        </NewChannelContainer>
        <ChannelsList>
          {
            channels.map(item => (
              <Channel id={item.id}>
                # {item.name}
              </Channel>
            ))
          }
        </ChannelsList>

      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar
