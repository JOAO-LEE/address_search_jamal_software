import { FormControl, FormLabel } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { FormEvent, ReactNode, useContext } from "react";
import AddressContext from "../../context/AddressContext";

export default function AddressContainerForm({children}: {children: ReactNode}) {  
    const { addAddress } = useContext(AddressContext);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // console.log(event.currentTarget.geta);
        
        axios.get(`http://localhost:5198/`)
         .then((response: AxiosResponse<any>) => {
            addAddress(response.data)
         });
 };   
    return (
        <form onSubmit={handleSubmit}>
            <FormControl required variant="standard" margin="normal" >
                {children}         
            </FormControl>
        </form>
    )
}