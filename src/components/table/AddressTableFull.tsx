import { useContext, useEffect, useState} from 'react';
import AddressContext from '../../context/AddressContext';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { TAddress } from '../../types/TAddress';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';
import AddressContainerTable from './AddressContainerTable';
import { TMessage } from '../../types/TMessage';
import FeedbackMessage from '../FeedbackMessage';

export default function AddressTable() {
  let { address, addAddress } = useContext(AddressContext);
  const [feedback, setFeedback] = useState<TMessage>({});

  useEffect(() => {
    axios.get("http://localhost:5198")
    .then((response: AxiosResponse<any>) => {
      setFeedback({ response: true, message: "Endereços cadastrados", severity:"success" })
      response.data
      .map((addr: TAddress) => {
        addAddress(addr);
      })
    }).catch((error: AxiosResponse<AxiosError>) => {
        if (axios.isAxiosError(error)) {
          setFeedback({ response: true, message: "Deu ruim", severity:"error" })
        }
    });
  }, [address]);
 
  return (
      <>
        { feedback.response && <FeedbackMessage feedback={feedback} /> }
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
