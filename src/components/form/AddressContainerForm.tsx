import { FormControl } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { FormEvent, ReactNode, useContext, useState } from "react";
import AddressContext from "../../context/AddressContext";
import InputContext from "../../context/InputContext";
import styles from  '../../styles/styles.module.css'
import { LinearProgress } from '@mui/material';



export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { addAddress } = useContext(AddressContext);
    let { addressInput, inputAddress } = useContext(InputContext);
    const [loading, setLoading] = useState(false);
    const [noAddressStatus, setNoAddressStatus] = useState(false)


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputAddress("");
        setLoading(true)
        
        axios.get(`http://localhost:5198/${addressInput}`)
         .then((response: AxiosResponse<any>) => {
            addAddress(response.data)
            setLoading(false);
        }).catch((reason: AxiosResponse<any>) => {
            setLoading(false);
            if (reason.status === 400) {
                
            }
        });
 };   
    return (
        <>
            <form onSubmit={handleSubmit} className={styles["address-form"]}>
                <FormControl 
                required 
                variant="standard" 
                margin="normal">
                    {children}         
                </FormControl>
            </form>
            {loading && <LinearProgress />}
        </>
    )
}
