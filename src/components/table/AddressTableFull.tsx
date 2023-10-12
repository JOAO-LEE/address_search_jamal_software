import { useContext } from 'react';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';
import AddressContainerTable from './AddressContainerTable';
import addressContext from '../../context/AddressContext';

export default function AddressTable() {
  const { address } = useContext(addressContext);

  return (
    <>
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
