import NoTableMessage from '../NoTableMessage';
import { useContext, useEffect, useState} from 'react';
import AddressContext from '../../context/AddressContext';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { TAddress } from '../../interfaces/IAddress';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';
import AddressContainerTable from './AddressContainerTable';


export default function AddressTable() {
  let { address, addAddress } = useContext(AddressContext);
  let [noTableState, setNoTableMessage] = useState(false);

  useEffect(() => {
    setNoTableMessage(false)
    axios.get("http://localhost:5198")
    .then((response: AxiosResponse<any>) => {
      response.data
      .map((addr: TAddress) => {
        addAddress(addr);
      })  
    }).catch((error: AxiosResponse<AxiosError>) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setNoTableMessage(true)
      }
    });
  }, [address]);
 
  return (
      <>
        {noTableState && <NoTableMessage /> }
          { 
            address.length >= 1
            && 
            <AddressContainerTable>
              <AddressHeaderTable />
              <AddressesRowsTable />
            </AddressContainerTable>
          }
      </>
  );
}
