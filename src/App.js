import React, { Component }from 'react';
import './App.css';

import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './Components/FormularioCadastro';

class App extends Component {
  render () {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
