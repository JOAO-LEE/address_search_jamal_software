import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function SearchButton ({isButtonEnabled}: {isButtonEnabled: boolean}) {
return (
    <Button variant="contained" size="small" color="info" endIcon={<Search />} disabled={!isButtonEnabled} >
    Buscar
  </Button>
)
}