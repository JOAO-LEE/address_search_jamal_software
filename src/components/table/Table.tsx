import {Table, TableContainer, Paper} from '@mui/material/';
import { useContext, useEffect} from 'react';
import AddressContext from '../../context/AddressContext';
import AddressInput from '../InputAddress';
import axios, { AxiosResponse } from 'axios';
import { TAddress } from '../../interfaces/IAddress';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';

export default function AddressTable() {
  let {address, addAddress} = useContext(AddressContext);

  useEffect(() => {
    axios.get("http://localhost:5198")
    .then((response: AxiosResponse<any>) => {
      response.data.map((addr: TAddress) => {
        addAddress(addr);
        console.log(address);
      });
    });
  }, [])
 
  return (
    <main>
    <AddressInput/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <AddressHeaderTable />
        <AddressesRowsTable />
      </Table>
    </TableContainer>
    </main>
  );
}
