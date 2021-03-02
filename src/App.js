// Components
import Chat from './components/chats/Chat'
import Login from './components/login/Login'
import Header from './components/header/Header'
// Packages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import './App.css';


function App() {
  const Container = styled.div`

  `

  return (
    <div className="App">
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Container>
    </Router>
  </div>)
}

export default App;
