import { FormControl } from "@mui/material";
import axios, { AxiosResponse, AxiosError } from "axios";
import { FormEvent, ReactNode, useContext, useState } from "react";
import AddressContext from "../../context/AddressContext";
import InputContext from "../../context/InputContext";
import styles from  '../../styles/styles.module.css'
import { LinearProgress } from '@mui/material';
import NoAddressMessage from '../NoAddressMessage';



export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { addAddress } = useContext(AddressContext);
    let { addressInput, inputAddress } = useContext(InputContext);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [messageKey, setMessageKey] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputAddress("");
        setLoading(true)
        axios.get(`http://localhost:5198/${addressInput}`)
         .then((response: AxiosResponse<any>) => {
            addAddress(response.data)
            setLoading(false);
            setErrorMessage("")
         }).catch((error) => {
             if (axios.isAxiosError(error)) {
                 setLoading(false);
                 setErrorMessage(error.response?.data.message);
                 setMessageKey(new Date().toISOString());
            }  
         })

 };   
    return (
        <>
            <form onSubmit={handleSubmit} className={styles["address-form"]}>
                <FormControl 
                required 
                variant="standard" 
                margin="normal"
                >
                    {children}         
                </FormControl>
            </form>
            {loading && <LinearProgress />}
            {errorMessage && <NoAddressMessage message={errorMessage} key={messageKey}/>}
        </>
    )
}
