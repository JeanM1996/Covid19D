'use strict';

import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="Home">
      <div className="lander">
      <div className="step step1">
        <div >
          <form id="Form">
            <div >
              <label>
                <h1>Paso 1: Instrucciones</h1>
              </label>
              <div >
                <div >
                  <div >
                    <h3>Bienvenido Ingrese toda la información solicitada</h3>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
