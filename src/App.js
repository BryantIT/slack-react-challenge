// Components
import Chat from "./components/chats/Chat";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
// Packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
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
