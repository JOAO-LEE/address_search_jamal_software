import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { TAddressBadMessage } from "../types/address/TAddress";

export default function FeedbackMessage({ feedback }: { feedback: TAddressBadMessage }) {
    const [open, setOpen] = useState(false)
    const { message, severity, response, name } = feedback;

    useEffect(() => {
        if (response) {
          setOpen(true)
        } else {
          setOpen(false)
        }
    }, [message, severity, response, name])

    const handleClose = () => {
      setOpen(false);
  };
    return (
      <Collapse 
        in={open}
      >
          <Alert
          variant="outlined" 
          severity={severity}
          action=
            {
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
                >
                  <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            >
            <AlertTitle>{name}</AlertTitle>
              {message}
          </Alert>
      </Collapse>
    )
}