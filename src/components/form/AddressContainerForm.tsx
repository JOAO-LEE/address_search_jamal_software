import { FormControl } from "@mui/material";
import axios, { AxiosResponse, AxiosError } from "axios";
import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import AddressContext from "../../context/AddressContext";
import InputContext from "../../context/InputContext";
import styles from  '../../styles/styles.module.css'
import { LinearProgress } from '@mui/material';
import FeedbackMessage from '../FeedbackMessage';
import { TMessage } from "../../types/TMessage";

export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { addAddress } = useContext(AddressContext);
    let { addressInput, inputAddress } = useContext(InputContext);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<TMessage>({response: false});

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputAddress("");
        setLoading(true)
        axios.get(`http://localhost:5198/${addressInput}`)
        .then((response: AxiosResponse<any>) => {
            addAddress(response.data);
            setLoading(false);
            setFeedback({ message: "Endereço foi cadastrado!", severity: "success", response: true });
        })
        .catch((error) => {
             if (axios.isAxiosError(error)) {
                setLoading(false);
                setFeedback({ message: error.response?.data.message, severity: "error", response: true });
            }  
         });
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
            {loading && <LinearProgress sx={{maxWidth: "50%", display: "flex" }} />}
            {feedback.response && <FeedbackMessage feedback={feedback}/>}
        </>
    )
}
