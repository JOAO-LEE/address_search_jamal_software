import { FormControl, FormLabel } from "@mui/material";
import { ReactNode } from "react";

export default function AddressContainerForm({children}: {children: ReactNode}) {       
    return (
        <FormControl>
            <FormLabel>Cep</FormLabel>
            {children}         
        </FormControl>
    )
}