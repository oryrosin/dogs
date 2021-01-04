import './App.css'
import HomePage from './pages/HomePage'
import { Navbar } from 'react-bootstrap'
import {Switch, HashRouter, Route} from 'react-router-dom';
function App() {
  return (
      <header className="App-header">
      
      
      <Navbar>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="#/breeds">Breeds</Navbar.Brand>
        {/* <Navbar.Brand href="#/breeds/id/dogs">Actors</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>
      <HashRouter>
        <Switch>

          <Route exact path="/">
            <div className="App">
              <header className="App-header"><HomePage/></header>
            </div>
          </Route>
          
          <Route exact path="/breeds"><BreedsPage/></Route>
          
          <Route exact path="/breeds/id/dogs"><DogsPage/></Route>
        </Switch>
      </HashRouter>
      </header>

  );
}

export default App;
