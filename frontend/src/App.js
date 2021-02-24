import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import SyncHelper from './Components/SyncHelper'
import PokemonTCG from './Components/PokemonTCG'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/SyncHelper">
              <SyncHelper/>
            </Route>
            <Route path="/Pokemon-TCG">
              <PokemonTCG/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
