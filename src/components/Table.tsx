import Table from '@mui/material/Table';
import { ChangeEvent, useContext, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddressContext from '../context/AddressContext';
import {IAddress} from '../interfaces/IAddress';
import NoTableMessage from './NoTableMessage';
import Input from '@mui/material/Input';
import { Button, FormHelperText, FormLabel, InputLabel } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function BasicTable() {

  let [addressInput, setAddressInput] = useState("");
  let [isCepValid, setCepValid] = useState(true);
  let [isButtonEnabled, setButtonEnable] = useState(false);
  let addressContext = useContext(AddressContext);
  


  let addressRegexExpression = new RegExp(/^\d{7}$/);
  let isInputACep = addressRegexExpression.test(addressInput);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInput(event.target.value);
    setCepValid(isInputACep);
    setButtonEnable(isInputACep);
  };
  return (
    <main>
    <InputLabel>
      <Input placeholder='Insira o cep aqui! Ex: "00000000"' error={!isCepValid} onChange={handleChange} value={addressInput} aria-describedby="component-error-text"/>
      </InputLabel>
      {(!isCepValid && addressInput.length <= 7) && <FormHelperText id="component-error-text">O CEP precisa ser no formato "00000000"!</FormHelperText>}
      <Button variant="contained" size="small" color="info" endIcon={<Search />} disabled={!isButtonEnabled} >
        Buscar
      </Button>
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
