import Table from '../components/table/AddressTableFull';
import Form from '../components/form/AddressFormFull';
import { useContext, useEffect, useState } from 'react';
import AddressContext from '../context/AddressContext';
import FeedbackMessage from '../components/FeedbackMessage';
import { TAddressBadMessage } from '../types/address/TAddress';
import axios, { AxiosError } from 'axios';

export default function Home() {
    let { fetchAddressData } = useContext(AddressContext);
    const [feedback, setFeedback] = useState<TAddressBadMessage>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchAddressData();
                setFeedback({message: "Todos os endereços cadastrados", response: true, severity: "success", name: "Success"});
    
            } catch (error: AxiosError | any) {
                if(axios.isAxiosError(error))  {
                setFeedback({ message: error.response?.data.message, response: true, severity: "error", name: "Error" });
                }
            }
        }
        fetchData();
      }, []);

    return (
        <main>
            <Form/>
            <section>
                {feedback?.response && <FeedbackMessage feedback={feedback} />}
                <Table />
            </section>
        </main>
    )
}