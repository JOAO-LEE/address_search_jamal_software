import { FormControl, FormLabel } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { FormEvent, ReactNode, useContext } from "react";
import AddressContext from "../../context/AddressContext";
import InputContext from "../../context/InputContext";


export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { addAddress } = useContext(AddressContext);
    let { addressInput, inputAddress } = useContext(InputContext);
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputAddress("");
        
        axios.get(`http://localhost:5198/${addressInput}`)
         .then((response: AxiosResponse<any>) => {
            addAddress(response.data)
         });
 };   
    return (
        <form onSubmit={handleSubmit} action={addressInput}>
            <FormControl required variant="standard" margin="normal" >
                {children}         
            </FormControl>
        </form>
    )
}