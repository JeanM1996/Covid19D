import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Registre la siguiente información" />
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Ingrese la siguiente información para identificación</ListSubheader>
            </GridListTile>
            <TextField
              placeholder="Ingrese su numero de cédula"
              label="Numero de Cedula"
              onChange={handleChange('Numero de cedula')}
              defaultValue={values.cedula}
              margin="normal"
                            fullWidth="true"
                            required
            />
            <br />
            <TextField
              placeholder="Ingrese la ciudad de residencia"
              label="Ciudad de residencia"
              onChange={handleChange('Ciudad de residencia')}
              defaultValue={values.ciudad}
              margin="normal"
                            fullWidth="true"
                            required
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Siguiente</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;