import { useState } from "react";
import InputContext from './InputContext';
import { TProviderProps } from "../interfaces/IAddress";

export default function AddressProvider({children}: TProviderProps) {
    let [addressInput, setAddressInput] = useState("");
    let [inputErrorFeedback, setInputErrorFeedback] = useState(false);
    let addressRegexExpression = new RegExp(/^\d{7}$/);

    function inputAddress(cep: string) {
        setAddressInput(cep);
        const isInputACep = addressRegexExpression.test(addressInput);
        setInputErrorFeedback(isInputACep);
    }

    return (
        <>
         <InputContext.Provider value={{ addressInput, inputErrorFeedback, inputAddress }}>
            {children}
         </InputContext.Provider>
        </>
    )
};  
