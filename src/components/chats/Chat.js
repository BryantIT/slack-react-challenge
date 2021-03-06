import { React } from 'react'
import styled from 'styled-components'

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
const Channel = styled.div`

`
const ChannelDetails = styled.div`

`
const ChannelName = styled.div`
  font-weight: 700;
`
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

function Chat(channelName) {
  // Component
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            {channelName.name}
          </ChannelName>
          <ChannelInfo>

          </ChannelInfo>
        </Channel>
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
