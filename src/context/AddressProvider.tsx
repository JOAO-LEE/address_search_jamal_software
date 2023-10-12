import { useState } from "react";
import AddressContext from './AddressContext';
import { TAddress, TProviderProps } from "../types/TAddress";

export default function AddressProvider({children}: TProviderProps) {
    const [address, setAddress] = useState<TAddress[]>([]);
    function addAddress(addressToAdd: TAddress[]): void {
        console.log(addressToAdd);
        
        if (addressToAdd) {
            setAddress([...address, ...addressToAdd]);
        }
    };
    return (
        <>
         <AddressContext.Provider value={{address, addAddress}}>
            {children}
         </AddressContext.Provider>
        </>
    )
};  