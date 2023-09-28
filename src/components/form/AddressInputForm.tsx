import { InputLabel, Input, FormHelperText } from "@mui/material";
import SearchButton from "./AddressSearchButtonForm";
import { useState } from "react";

export default function AddressInput () {
  let [addressInput, setAddressInput] = useState("");

  //Use react-hook-form?
  let addressRegexExpression = new RegExp(/^\d{8}$/);
  let isInputACep = addressRegexExpression.test(addressInput);

  let inputErrorFeedback = (!isInputACep && ( addressInput.length >= 1 && addressInput.length < 8));

  return (
    <>
      <InputLabel htmlFor="address-input">Digite aqui o CEP!</InputLabel>
        <Input placeholder='Ex: "00000000"' error={inputErrorFeedback} onChange={(e) => setAddressInput(e.target.value)} value={addressInput} aria-describedby="component-error-text" id="address-input"/>
        {inputErrorFeedback && <FormHelperText id="component-error-text">O CEP precisa ser no formato "00000000"!</FormHelperText>}
        <SearchButton isButtonEnabled={isInputACep} cepNumber={addressInput}/>
    </>
  )
    
}