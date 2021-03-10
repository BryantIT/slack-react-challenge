import { React, Fragment, useState, useEffect } from 'react'
// Components
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header';
import styled from 'styled-components';
// Firebase
import db from './firebase'


// Styling
const Main = styled.div`
display: grid;
grid-template-columns: 350px auto
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 50px minmax(0, 1fr);
`

const Workspace = () => {

  const [channels, setChannels] = useState([])

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setChannels(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description
        }
      }))
      })
  }

  useEffect(() => {
    getChannels()
  }, [])


  return(
    <Container>
      <Header />
      <Main>
          <Sidebar channels={channels} />
      </Main>
    </Container>
  )
}

export default Workspace
