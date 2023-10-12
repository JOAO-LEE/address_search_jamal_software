import { useState } from "react";
import AddressContext from './AddressContext';
import { TAddress, TProviderProps } from "../types/TAddress";
import { addressFetcher } from "../tasks/addressFetcher";

export default function AddressProvider({children}: TProviderProps) {
    const [address, setAddress] = useState<TAddress[]>([]);
    function addAddress(addressToAdd: TAddress[] | TAddress): void {
        if (addressToAdd) {
            setAddress([...address, ...addressToAdd]);
        }
    };

    const fetchAddressData = async (addressInput?: string): Promise<void> => {
        const allAddresses = await addressFetcher(addressInput);
        console.log(allAddresses);
        if (allAddresses) {
            addAddress([allAddresses]);
        } else {
        }
    };
    return (
        <>
         <AddressContext.Provider value={{address, addAddress, fetchAddressData}}>
            {children}
         </AddressContext.Provider>
        </>
    )
};  