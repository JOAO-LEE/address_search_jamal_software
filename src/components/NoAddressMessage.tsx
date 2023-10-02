import { Alert, Collapse, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
// import addressContext from "../context/AddressContext";
import CloseIcon from '@mui/icons-material/Close';

export default function NoAddressMessage({message}: {message: string}) {
    // const {address} = useContext(addressContext)
    const [open, setOpen] = useState(false)
    console.log(message);
    
    useEffect(() => {
        if (message) {
          setOpen(true);
        } 
      }, [message]);


    return (
        <Collapse in={open} >
            <Alert 
            variant="outlined" 
            severity="error"
            action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>} 
            >
                {message}
            </Alert>
        </Collapse>
    )
}