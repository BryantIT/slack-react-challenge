import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/chats/Chat'
import Login from './components/login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
