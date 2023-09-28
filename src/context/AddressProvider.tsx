import { useState } from "react";
import AddressContext from './AddressContext';
import { TAddress, TProviderProps } from "../interfaces/IAddress";

export default function AddressProvider({children}: TProviderProps) {
    const [address, setAddress] = useState<Array<TAddress>>([]);
    function addAddress(addressToAdd: TAddress): void {
        const isCepAlreadyAvailable = address.find((addr) => addr.cep === addressToAdd.cep);
        if (!isCepAlreadyAvailable) {
            setAddress([...address, addressToAdd])
        } 
    }
    return (
        <>
         <AddressContext.Provider value={{address, addAddress}}>
            {children}
         </AddressContext.Provider>
        </>
    )
};  