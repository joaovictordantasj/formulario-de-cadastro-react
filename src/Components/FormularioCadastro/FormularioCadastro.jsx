import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCpf}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [err, setErr] = useState({cpf:{valido:true, texto:''}})
  return(
  <form 
    onSubmit={e => {
      e.preventDefault();
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      // console.log({nome, sobrenome, cpf, promocoes, novidades});
    }}
  >
      <TextField 
        value={nome}
        onChange={e => setNome(e.target.value)}
        id='nome'
        label='Nome'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value)}
        id='sobrenome'
        label='Sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      
      <TextField
        value={cpf}
        onChange={e => {
          let tmpCpf = e.target.value;
          if (tmpCpf.length <= 11) {
            setCpf(tmpCpf);
          }
        }}
        onBlur={e => {
          const ehValido = validarCpf(cpf);
          setErr({cpf:ehValido});
        }}
        error={!err.cpf.valido}
        helperText={err.cpf.texto}
        id='cpf'
        label='CPF'
        variant='outlined'
        type='number'
        margin='normal'
        fullWidth
        required
      />

      <FormControlLabel
        label='Promoções'
        control={
          <Switch
            checked={promocoes}
            onChange={e => setPromocoes(e.target.checked)}
            name='promoções'
            color='primary'
            // defaultChecked={promocoes}
          />
        }
      />

      <FormControlLabel
        label='Novidades'
        control={
          <Switch
            checked={novidades}
            onChange={e => setNovidades(e.target.checked)}
            name='novidades'
            color='primary'
            // defaultChecked={novidades}
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro; 