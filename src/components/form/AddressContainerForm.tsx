import { FormControl } from "@mui/material";
import { FormEvent, ReactNode, useContext, useState } from "react";
import AddressContext from "../../context/AddressContext";
import InputContext from "../../context/InputContext";
import styles from  '../../styles/styles.module.css'
import { LinearProgress } from '@mui/material';
import FeedbackMessage from '../messenger/FeedbackMessage';
import { TMessage } from "../../types/message/TMessage";
import { AxiosError } from "axios";

export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { fetchAddressData } = useContext(AddressContext);
    let { addressInput, inputAddress } = useContext(InputContext);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<TMessage>()
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        inputAddress("");
        setLoading(true);
        const fetchData = async () => {
            try {
                setFeedback({ message: "Endereço cadastrado!", response: true, name: "Sucesso", severity: "success" });
                fetchAddressData(addressInput)
            } catch (error: AxiosError | any) {
                setFeedback({ message: error.message, response: true, name: "Erro", severity: "error" });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    };

    return (
        <>
            <form 
            onSubmit={handleSubmit} 
            className={styles["address-form"]}
            >
                <FormControl 
                required 
                variant="standard" 
                margin="normal"
                >
                    {children}         
                </FormControl>
            </form>
            {loading && <LinearProgress sx={{ maxWidth: "50%", display: "flex" }} />}
            {feedback?.response && <FeedbackMessage feedback={feedback}/>}
        </>
    )
}
