import Table from '@mui/material/Table';
import { ChangeEvent, useContext, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddressContext from '../context/AddressContext';
import NoTableMessage from './NoTableMessage';
import AddressInput from './InputAddress';

export default function BasicTable() {
  let addressContext = useContext(AddressContext);

  return (
    <main>
      <AddressInput/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Cep</TableCell>
            <TableCell align="right">Logradouro</TableCell>
            <TableCell align="right">Complemento</TableCell>
            <TableCell align="right">Localidade</TableCell>
            <TableCell align="right">UF</TableCell>
            <TableCell align="right">IBGE</TableCell>
            <TableCell align="right">GIA</TableCell>
            <TableCell align="right">DDD</TableCell>
            <TableCell align="right">SIAFI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!addressContext.address.length? <NoTableMessage /> : <p>Endereços abaixo</p> } 
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  );
}
