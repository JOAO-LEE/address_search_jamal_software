import { useState } from "react";
import AddressContext from './AddressContext';
import { TAddress, TAddressBadMessage, TProviderProps } from "../types/TAddress";
import { addressFetcher } from "../tasks/addressFetcher";

export default function AddressProvider({children}: TProviderProps) {
    const [address, setAddress] = useState<TAddress[]>([]);
    console.log(address);
    

    function addAddress(addressToAdd: TAddress[] | TAddress): void {
        if (addressToAdd) {
            const newAddresses = Array.isArray(addressToAdd) ? addressToAdd : [addressToAdd];
            setAddress([...address, ...newAddresses]);  
        };
    }

    const fetchAddressData = async (addressInput?: string): Promise<void | Error> => {
       try {
        const allAddresses = await addressFetcher(addressInput);
        if (allAddresses) {
            const newAddresses = Array.isArray(allAddresses) ? allAddresses : [allAddresses];
            addAddress([...address, ...newAddresses]);
        }
       } catch (error) {
        return error as Error;
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