import { React } from 'react'
import styled from 'styled-components'
// Components
import ChatHeader from './ChatHeader'

// Styling
const Container = styled.div`
display: grid;
grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, .13)
`
const MessageContainer = styled.div`

`
const ChatInput = styled.div`

`
const ChannelDetails = styled.div`

`

function Chat() {
  // Component
  return (
    <Container>
      <Header>
        <ChatHeader />
        <ChannelDetails>

        </ChannelDetails>

      </Header>
      <MessageContainer>

      </MessageContainer>
      <ChatInput></ChatInput>
    </Container>
  )
}

export default Chat
