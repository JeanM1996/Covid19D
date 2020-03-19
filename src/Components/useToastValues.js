import React from 'react';
import { Box, useToast } from '@chakra-ui/core';

export const useToastValues = () => {
  const toast = useToast();


  
  return (values) => {
    var sintoma = function(sintomaS) {
      var i = null;
      for (i = 0; values.sintomas.length > i; i += 1) {
        if (values.sintomas[i].nombre === sintomaS) {
          return true;
        }
      }
      
      return false;
    };

    var fiebre=sintoma("Fiebre");
    var tos=sintoma("Tos");
    var moco=sintoma("Mucosidad o Moco");
    var estornudos=sintoma("Estornudos");
    var dolorg=sintoma("Dolor de garganta");
    var malestarg=sintoma("Malestar en la garganta");
    var dificultadr=sintoma("Dificultad para respirar");
    var flema=sintoma("Flema");
    var vomito=sintoma("Vómito");
    var diarrea=sintoma("Diarrea");
    var cansancio=sintoma("Cansancio/debilidad");
    var dolorh=sintoma("Dolor de huesos");
    var dolorm=sintoma("Dolor muscular");
    var dolorc=sintoma("Dolor de cabeza");

    if((values.contactoC=='1'||values.presenciaF=='1')||((fiebre&&tos&&dificultadr&&flema&&cansancio)||(fiebre&&tos&&dolorm&&dolorh))){
      toast({
        title: 'Diagnostico',
        description: (
          <Box
            as="pre"
            maxHeight="80vh"
            maxWidth="80vw"
            overflow="auto"
          >
            Alto riesgo de tener CoronaVirus Covid19
            Contacte al 171
          </Box>
        ),
        status: 'warning',
        duration: null,
        isClosable: true,
        position: 'top',
      });
    }else{
      toast({
        title: 'Diagnostico',
        description: (
          <Box
            as="pre"
            maxHeight="80vh"
            maxWidth="80vw"
            overflow="auto"
          >
           Existe bajo riesgo no obstante preste atencion a los sintomas
          </Box>
        ),
        status: 'warning',
        duration: null,
        isClosable: true,
        position: 'top',
      });
    }
    toast({
      title: 'Valores enviados',
      description: (
        <Box
          as="pre"
          maxHeight="80vh"
          maxWidth="80vw"
          overflow="auto"
        >
          {JSON.stringify(values, null, 2)}
        </Box>
      ),
      status: 'success',
      duration: null,
      isClosable: true,
      position: 'top',
    });
  };
};
