import NoTableMessage from '../NoTableMessage';
import { useContext, useEffect, useState} from 'react';
import AddressContext from '../../context/AddressContext';
import axios, { AxiosResponse } from 'axios';
import { TAddress } from '../../interfaces/IAddress';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';
import AddressContainerTable from './AddressContainerTable';

export default function AddressTable() {
  let { address, addAddress } = useContext(AddressContext);

  useEffect(() => {
    axios.get("http://localhost:5198")
    .then((response: AxiosResponse<any>) => {
      response.data
      .map((addr: TAddress) => {
        addAddress(addr);
      })  
    });
  }, [address]);
 
  return (
      <>
        {
          address.length 
          ?
          <AddressContainerTable>
            <AddressHeaderTable />
            <AddressesRowsTable />
          </AddressContainerTable>
          :
          <NoTableMessage />
        }
      </>
  );
}
