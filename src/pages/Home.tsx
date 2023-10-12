import Table from '../components/table/AddressTableFull';
import Form from '../components/form/AddressFormFull';
import { useContext, useEffect, useState } from 'react';
import AddressContext from '../context/AddressContext';
import { TMessage } from '../types/TMessage';
import FeedbackMessage from '../components/FeedbackMessage';

export default function Home() {
    let { address, fetchAddressData } = useContext(AddressContext);
    const [feedback, setFeedback] = useState<TMessage>({});

    useEffect(() => {
        fetchAddressData();
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