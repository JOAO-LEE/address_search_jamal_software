import { InputLabel, Input, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import SearchButton from "./SearchButton";
import axios, { AxiosResponse } from "axios";

export default function AddressInput () {
  let [addressInput, setAddressInput] = useState("");
  // useEffect(() => {
  //   axios.get(`http://localhost:5198/${addressInput}`)
  //   .then((response: AxiosResponse<any>) => {
  //     console.log((response.data));
      
  //   });
  // }, [])

  let addressRegexExpression = new RegExp(/^\d{8}$/);
  let isInputACep = addressRegexExpression.test(addressInput);

  let inputErrorFeedback = (!isInputACep && ( addressInput.length >= 1 && addressInput.length < 8));

  return (
    <InputLabel htmlFor="address-input">
      <Input placeholder='Insira o cep aqui! Ex: "00000000"' error={inputErrorFeedback} onChange={(e) => setAddressInput(e.target.value)} value={addressInput} aria-describedby="component-error-text"/>
      {inputErrorFeedback && <FormHelperText id="component-error-text">O CEP precisa ser no formato "00000000"!</FormHelperText>}
      <SearchButton isButtonEnabled={isInputACep}/>
      </InputLabel>
  )
    
}