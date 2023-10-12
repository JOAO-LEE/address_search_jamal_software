import axios from "axios";
import { TAddress, TAddressBadMessage } from "../types/TAddress";

const addressFetcher = async (cepNumber? : string): Promise<TAddress | TAddress[] | TAddressBadMessage> => {
    try {
        const response =  await axios.get(`http://localhost:5198/${cepNumber || ""}`);
        const { data } = response
        return data
       } catch (error) {
        if (axios.isAxiosError(error)) {
            return { response: true, message: error.message, severity: "error" }
        };
    }
    return { message: "Something went wrong! Sorry!", response: true, severity: "error" };
};




export { addressFetcher };
