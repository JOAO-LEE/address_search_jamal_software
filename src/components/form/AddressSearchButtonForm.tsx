import { Search as SearchIcon } from "@mui/icons-material";
import { FormEvent, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import AddressContext from "../../context/AddressContext";

export default function SearchButton ({isButtonEnabled, cepNumber}: {isButtonEnabled: boolean, cepNumber: string}) {
     const { addAddress } = useContext(AddressContext);
    const handleSubmit = async () => {
           await axios.get(`http://localhost:5198/${cepNumber}`)
            .then((response: AxiosResponse<any>) => {
              addAddress(response.data);
            });
    };
  return (
    <Button 
      variant="contained" 
      size="small" 
      color="info"
      endIcon={<SearchIcon />} 
      disabled={!isButtonEnabled}
      onClick={handleSubmit}
      >
        Buscar
    </Button>
  )
}