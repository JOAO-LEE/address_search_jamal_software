import { Search as SearchIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import inputContext from "../../context/InputContext";
import { useContext } from "react";

export default function SearchButton () {
  const { inputErrorFeedback } = useContext(inputContext)
  return (
    <Button 
      variant="contained" 
      size="small" 
      color="info"
      endIcon={<SearchIcon />} 
      disabled={!inputErrorFeedback}
      type="submit"
      >
        Buscar
    </Button>
  )
}