import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/:post_id' component={PostDetail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
