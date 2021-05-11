import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './about/About'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/Main.css';

const App = () =>{
  return(
      <>
          <Router>
            <Navbar />
              <Route exact path="/" render={()=>( 
                <Home />
              )}/>
              <Route exact path="/About" render={()=>( 
                <About />
              )}/>

          </Router>
      </>
  )
}

export default App;