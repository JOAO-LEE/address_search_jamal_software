import { useContext, useEffect, useState} from 'react';
import AddressContext from '../../context/AddressContext';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { TAddress } from '../../types/TAddress';
import AddressesRowsTable from './AddressRowsTable';
import AddressHeaderTable from './AddressHeaderTable';
import AddressContainerTable from './AddressContainerTable';
import { LinearProgress } from '@mui/material';
import { TMessage } from '../../types/IMessage';
import FeedbackMessage from '../FeedbackMessage';


export default function AddressTable() {
  let { address, addAddress } = useContext(AddressContext);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<TMessage>({});


  useEffect(() => {
    setLoading(true)
    setFeedback({ response: false })
    axios.get("http://localhost:5198")
    .then((response: AxiosResponse<any>) => {
      setFeedback({ response: true, message: "Endereços cadastrados", severity:"success" })
      response.data
      .map((addr: TAddress) => {
        addAddress(addr);
      })
      setLoading(false);
    }).catch((error: AxiosResponse<AxiosError>) => {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          setFeedback({ response: true, message: "Endereços cadastrados", severity:"error" })
        }
    });
  }, [address]);
 
  return (
      <>
        { loading && <LinearProgress/> }
        { feedback.response && <FeedbackMessage feedback={feedback}/> }
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
