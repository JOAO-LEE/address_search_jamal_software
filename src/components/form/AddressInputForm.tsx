import { InputLabel, Input, FormHelperText } from "@mui/material";
import InputContext from '../../context/InputContext';

import SearchButton from "./AddressSearchButtonForm";
import { useContext } from "react";

export default function AddressInput () {
  const { addressInput, inputAddress, inputErrorFeedback} = useContext(InputContext)
  return (
    <>
      <InputLabel htmlFor="address-input" size="small" variant="standard">Digite aqui o CEP!</InputLabel>
        <Input name="address-input" placeholder='Ex: "00000000"' error={inputErrorFeedback} onChange={(e) => inputAddress(e.target.value)} value={addressInput} aria-describedby="component-error-text" id="address-input"/>
        {inputErrorFeedback && <FormHelperText id="component-error-text">O CEP precisa ser no formato "00000000"!</FormHelperText>}
        <SearchButton isButtonEnabled={!inputErrorFeedback}  />
    </>
  )
    
}