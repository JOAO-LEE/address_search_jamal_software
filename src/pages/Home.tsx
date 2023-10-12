import Table from '../components/table/AddressTableFull';
import Form from '../components/form/AddressFormFull';
import { useContext, useEffect, useState } from 'react';
import AddressContext from '../context/AddressContext';
import { TMessage } from '../types/TMessage';
import FeedbackMessage from '../components/FeedbackMessage';
import { addressFetcher } from '../tasks/addressFetcher';
import { TAddress } from '../types/TAddress';

export default function Home() {
    let { addAddress } = useContext(AddressContext);
    const [feedback, setFeedback] = useState<TMessage>({});

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const allAddresses: TAddress[] | null = await addressFetcher();
            console.log(allAddresses);
            
            if (allAddresses) {
                addAddress(allAddresses);
                setFeedback({message: "Endereços cadastrados", response: true, severity: "success"});
            } else {
                setFeedback({message: "Erro!", response: true, severity: "error"});
            }
        };
        fetchData();
      }, []);

    return (
        <main>
            <Form/>
            <section>
                {feedback.response && <FeedbackMessage feedback={feedback} />}
                <Table />
            </section>
        </main>
    )
}