import axios from "axios";
import { TAddress, TAddressBadMessage } from "../types/address/TAddress";
import { BadMessage } from "../classes/BadResponseMessage";

const addressFetcher = async (cepNumber? : string): Promise<TAddress | TAddress[] | void> => {
    try {
        const response =  await axios.get(`http://localhost:5198/${cepNumber || ""}`);
        const { data } = response
        return data
       } catch (error: TAddressBadMessage | any) {
        console.log(error);
        if (axios.isAxiosError(error)) {
            throw new BadMessage(error);
        };
    }
};




export { addressFetcher };
