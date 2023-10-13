import { useState, useEffect } from "react";
import InputContext from './InputContext';
import { TProviderProps } from '../types/children/TChildren'

export default function AddressProvider({ children }: TProviderProps) {
  const [addressInput, setAddressInput] = useState("");
  const [inputErrorFeedback, setInputErrorFeedback] = useState(true);

  useEffect(() => {
    const addressRegexExpression = new RegExp(/^\d{8}$/);
    const isInputACep = addressRegexExpression.test(addressInput);

    setInputErrorFeedback(isInputACep);
  }, [addressInput]);

  function inputAddress(cep: string) {
    setAddressInput(cep);
  }

  return (
    <InputContext.Provider
      value={{ addressInput, inputErrorFeedback, inputAddress }}
    >
      {children}
    </InputContext.Provider>
  );
}