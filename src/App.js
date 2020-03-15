import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import About from './Pages/About';
import Home from './Pages/Home';
import Diagnostico from './Pages/Diagnostico';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logokbs.png'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="75"
        height="35"
        className="d-inline-block align-top"
      />{''}
      App Name
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/diagnostico">¿Estoy Contagiado?</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Another Link</Nav.Link>
            <Nav.Link href="/about">Acerca De</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>   
      <Route exact path="/" component={Home} />
        <Route path="/diagnostico" component={Diagnostico} />
        <Route path="/about" component={About} />
  
    </BrowserRouter>
    )
  }
}export default App;
