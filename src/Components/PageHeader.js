import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Heading, Link, Box, Icon,
} from '@chakra-ui/core';
import { useForm } from '@formiz/core';


const propTypes = {
  children: PropTypes.node,
  onReset: PropTypes.func,
  githubPath: PropTypes.string,
};
const defaultProps = {
  children: '',
  onReset: () => {},
  githubPath: null,
};


export const PageHeader = ({ children, onReset, githubPath }) => {
  const form = useForm();

  return (
    <Box mb="6">
      <Heading d="flex" alignItems="center">
        {children}

      </Heading>
      
      <p d="flex" alignItems="center" >Ingrese la información requerida </p>
    </Box>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
