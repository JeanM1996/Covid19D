import React from "react";
import { Button } from 'react-bootstrap';
import "./Home.css";
import { LinkContainer } from 'react-router-bootstrap'


const Diagnostico = () => (


  
  <div className="Home">
  <div className="lander">
    <h1>Bienvenido</h1>
    <h2>Portal relacionado sobre el COViD19</h2>
    <p>Realizar Encuesta Sintomática</p>
    <LinkContainer to="/diagnostico">
    <Button variant="btn btn-success"  >
      Iniciar
    </Button>
    </LinkContainer>

    <h5 className="where">Desarrollado en Loja,Ecuador</h5>
    <h6>Knowledge Based Research Group</h6>
    <h6>Universidad Técnica Particular de Loja|UTPL</h6>
    <p>Developed By Jean Paul Mosquera </p>
  </div>
 
</div>
);



export default Diagnostico;