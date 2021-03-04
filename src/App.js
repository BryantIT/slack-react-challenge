import { React, useEffect, useState } from 'react'
// Components
import Chat from "./components/chats/Chat";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
// Packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
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
grid-template-rows: 50px auto;
`

// Component
function App() {

  const [channels, setChannels] = useState([])

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setChannels(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
      })
  }

  useEffect(() => {
    getChannels()
  }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar channels={channels} />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
