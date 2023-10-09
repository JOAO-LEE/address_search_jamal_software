import Table from '../components/table/AddressTableFull';
import Form from '../components/form/AddressFormFull';
import { useContext, useEffect, useState } from 'react';
import AddressContext from '../context/AddressContext';
import { TMessage } from '../types/TMessage';
import FeedbackMessage from '../components/FeedbackMessage';
import { addressFetcher } from '../tasks/addressFetcher';

export default function Home() {
    let { address, addAddress } = useContext(AddressContext);
    const [feedback, setFeedback] = useState<TMessage>({});

    useEffect(() => {
        const fetchData = async () => {
            const allAddresses = await addressFetcher();
            if (!allAddresses) {
                setFeedback({})
            }
           const newAddresses = [...address, ...allAddresses];
           addAddress(newAddresses);
        }

        fetchData();
      }, [address]);

    return (
        <main>
            <Form/>
            {feedback.response && <FeedbackMessage feedback={feedback} />}
            <Table />
        </main>
    )
}