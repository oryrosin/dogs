import './App.css'
import HomePage from './pages/HomePage'
import { Navbar } from 'react-bootstrap'
import {Switch, HashRouter, Route} from 'react-router-dom';
import BreedPage from './pages/BreedPage';


function App() {
  return (
    <div className="root">  
      <Navbar>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="#/breeds">Breeds</Navbar.Brand>
        <Navbar.Brand href="#/breeds">Dogs</Navbar.Brand>
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
          
          <Route exact path="/breeds"><BreedPage/></Route>
          
          {/* <Route exact path="/breeds/id/dogs"><DogsPage/></Route> */}
        </Switch>
      </HashRouter>
      
    </div>  

  );
}

export default App;
