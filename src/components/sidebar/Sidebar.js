import { React, useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import ChatHeader from '../chats/ChatHeader'
// MaterialUI
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import styles from './mystyle.module.css'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
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
function Sidebar(props, {  dialogOpen, close  }) {
  const [channels, setChannels] = useState([])
  const [channelName, setChannelName] = useState('')
  const [channelDescription, setChannelDescription] = useState('')
  const [open, setOpen] = useState(false)
  const [inputChannelName, setInputChannelName] = useState('')
  const [inputChannelDescription, setInputChannelDescription] = useState('')

  console.log(channelName)
  console.log(channelDescription)

  const handleAddChannel = () => {
    const name = inputChannelName
    const desc = inputChannelDescription
    if(name && desc){
      db.collection('rooms').add({
        name: name,
        description: desc
      })
    }
    setInputChannelName('')
    setInputChannelDescription('')
    setOpen(false)
  }

  const handleNewChannelName = (event) => {
    const name = event.target.value
    setInputChannelName(name)
  }

  const handleNewChannelDescription = (event) => {
    const desc = event.target.value
    setInputChannelDescription(desc)
  }

  const handleDialogClose = () => {
    setOpen(false)
  }

  const handleDialogOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    setOpen(dialogOpen)
  }, [dialogOpen])

  useEffect(() => {
    if(props){
      setChannels(props.channels)
    }
  }, [props])

  return (
    <Fragment>
      <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add a channel name and description
          </DialogContentText>
          <TextField
            autoFocus
            value={inputChannelName}
            onChange={handleNewChannelName}
            margin="dense"
            id="name"
            label="Channel Name"
            type="text"
            fullWidth
          />
          <TextField
            value={inputChannelDescription}
            onChange={handleNewChannelDescription}
            margin="dense"
            id="name"
            label="Channel Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddChannel} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
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
            <AddIcon onClick={handleDialogOpen} className={styles.add} />
          </NewChannelContainer>
          <ChannelsList>
            {
              channels.map(item => (
                <Channel id={item.id} onClick={(() => {
                  setChannelName(item.name)
                  setChannelDescription(item.description)
                })}>
                  # {item.name}
                </Channel>
              ))
            }
          </ChannelsList>

        </ChannelsContainer>
      </Container>
      <ChatHeader name={channelName} description={channelDescription} />
    </Fragment>
  )
}

export default Sidebar
