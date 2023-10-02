import { Alert } from "@mui/material";

export default function NoTableMessage() {
    return (
        <Alert variant="outlined" severity="warning">Não há endereços cadastrados</Alert>
    )
}