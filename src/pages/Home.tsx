import Table from '../components/table/AddressTableFull';
import Form from '../components/form/AddressFormFull';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useContext, useEffect, useState } from 'react';
import { TAddress } from '../types/TAddress';
import AddressContext from '../context/AddressContext';
import { TMessage } from '../types/TMessage';
import FeedbackMessage from '../components/FeedbackMessage';

export default function Home() {
    let { address, addAddress } = useContext(AddressContext);
    const [feedback, setFeedback] = useState<TMessage>({});

    useEffect(() => {
        axios.get("http://localhost:5198")
        .then((response: AxiosResponse<any>) => {
          setFeedback({ response: true, message: "Endereços cadastrados", severity:"success" });
          response.data
          .map((addr: TAddress) => {
            addAddress(addr);
          })
        }).catch((error: AxiosResponse<AxiosError>) => {
            if (axios.isAxiosError(error)) {
              setFeedback({ response: true, message: error.response?.data.message, severity:"error" });
            }
        });
      }, [address]);

    return (
        <main>
            <Form/>
            {feedback.response && <FeedbackMessage feedback={feedback} />}
            <Table />
        </main>
    )
}