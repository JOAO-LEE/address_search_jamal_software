import { Alert, Collapse, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { TMessage } from "../types/IMessage";

export default function FeedbackMessage({ feedback }: { feedback: TMessage }) {
    const [open, setOpen] = useState(false)
    const { message, severity, response } = feedback;
    
    useEffect(() => {
        if (response) {
          setOpen(true);
        } 
      }, [response]);

    return (
        <Collapse in={open}>
            <Alert 
            variant="outlined" 
            severity={severity}
            action=
              {
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
                {message}
            </Alert>
        </Collapse>
    )
}