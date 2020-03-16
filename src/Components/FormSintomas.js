import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';


const AntSwitch = withStyles(theme => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);


  const tileData = [
      {
        img: "https://image.flaticon.com/icons/svg/2615/2615180.svg",
        title: 'Tos',
        
      },
      {
       img: "https://image.flaticon.com/icons/svg/2038/2038104.svg",
       title: 'Fiebre',
       
     },
     {
       img: "https://image.flaticon.com/icons/svg/2257/2257477.svg",
       title: 'Mucosidad/Moco',
       
     },
     {
       img: "https://image.flaticon.com/icons/svg/2037/2037981.svg",
       title: 'Congestion Nasal',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2038/2038338.svg",
       title: 'Estornudos',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2038/2038172.svg",
       title: 'Dolor de garganta',
       
     },{
       img: "https://image.flaticon.com/icons/svg/361/361519.svg",
       title: 'Malestar en la gargnta',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2038/2038042.svg",
       title: 'Dificultad respiratoria',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2328/2328345.svg",
       title: 'Flema',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2615/2615156.svg",
       title: 'Vomito',
       
     },{
       img: 'https://image.flaticon.com/icons/svg/2615/2615185.svg',
       title: "Diarrea" ,
       
     },{
       img: "https://image.flaticon.com/icons/svg/2038/2038101.svg",
       title: 'Cansancio',
       
     },{
       img: "https://image.flaticon.com/icons/svg/2615/2615251.svg",
       title: 'Dolor de huesos',
       
     }
     ,{
       img: "https://image.flaticon.com/icons/svg/2010/2010434.svg",
       title: 'X-ray Pulmon Mancja',
       
     },
    ];

export class FormSintomas extends Component {


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="" />


      <GridList cellHeight={180} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Seleccione los sintomas</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                  <Grid item>No</Grid>
                  <Grid item>
                    <AntSwitch
                      checked={values.gripe}
                      onChange={handleChange('checkedC')
                      }
                      value="checkedC"
                    />
                  </Grid>
                  <Grid item>Si</Grid>
                </Grid>
              </Typography>
              }
            />
          </GridListTile>
        ))}
      </GridList>
            <br />
        
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Regresar</Button>

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

export default FormSintomas;