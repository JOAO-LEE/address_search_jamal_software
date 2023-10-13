import { useState } from "react";
import AddressContext from './AddressContext';
import { TAddress, TProviderProps } from "../types/address/TAddress";
import { addressFetcher } from "../tasks/addressFetcher";
import { BadMessage } from "../classes/BadResponseMessage";
import axios, { AxiosError } from "axios";

export default function AddressProvider({children}: TProviderProps) {
    const [address, setAddress] = useState<TAddress[]>([]);
    console.log(address);
    

    function addAddress(addressToAdd: TAddress[] | TAddress): void {
        if (addressToAdd) {
            const newAddresses = Array.isArray(addressToAdd) ? addressToAdd : [addressToAdd];
            setAddress([...address, ...newAddresses]);  
        };
    }

    const fetchAddressData = async (addressInput?: string): Promise<void> => {
       try {
        const allAddresses = await addressFetcher(addressInput);        
        if (allAddresses) {
            const newAddresses = Array.isArray(allAddresses) ? allAddresses : [allAddresses];
            addAddress([...address, ...newAddresses]);
        }
       } catch (error: AxiosError | unknown) {
        if(axios.isAxiosError(error)) throw new BadMessage(error);
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