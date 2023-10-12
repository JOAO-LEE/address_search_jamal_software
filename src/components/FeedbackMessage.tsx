import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { TMessage } from "../types/TMessage";

export default function FeedbackMessage({ feedback }: { feedback: TMessage }) {
    const [open, setOpen] = useState(false)
    const { message, severity, response } = feedback;

    useEffect(() => {
        if (response) {
          setOpen(true)
        } else {
          setOpen(false)
        }
    }, [message, severity, response])

    const handleClose = () => {
      setOpen(false);
  };
    return (
      <Collapse 
        in={open}
        sx={{ width: "88.5%"}}
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
            <AlertTitle>{ severity === "success" ? "Successo!" : "Erro!" }</AlertTitle>
              {message}
          </Alert>
      </Collapse>
    )
}