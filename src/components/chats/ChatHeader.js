import React from 'react'
import styled from 'styled-components'

// Styles
const Channel = styled.div`

`
const ChannelName = styled.div`
  font-weight: 700;
  font-size: 18px
`
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 15px;
  margin-top: 8px;
`

const ChatHeader = ({ name, description }) => {

  return(
    <Channel>
      <ChannelName>
        # {name}
      </ChannelName>
      <ChannelInfo>
        {description}
      </ChannelInfo>
    </Channel>
  )
}

export default ChatHeader
