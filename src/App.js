import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import About from './Pages/About';
import Home from './Pages/Home';
import Diagnostico from './Pages/Diagnostico';
import { BrowserRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logokbs.png'
import theme from './theme';

import {
  ThemeProvider
} from '@chakra-ui/core';

class App extends Component {
  
  render() {
    
    return (
      
      <BrowserRouter>
      <ThemeProvider theme={theme}>
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
      Covid19-Ecuador
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/diagnostico">Encuesta</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">TelegramBot</Nav.Link>
            <Nav.Link href="/about">Acerca De</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>   
      <Route exact path="/" component={Home} />
        <Route path="/diagnostico" component={Diagnostico} />
        <Route path="/about" component={About} />
        </ThemeProvider>
    </BrowserRouter>
    
    )
  }
  
}export default App;
