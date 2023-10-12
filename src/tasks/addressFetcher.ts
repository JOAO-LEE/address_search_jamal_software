import axios from "axios";
import { TAddress } from "../types/TAddress";

const addressFetcher = async (cepNumber? : string): Promise<TAddress | TAddress[] | null> => {
    try {
        const { data } =  await axios.get(`http://localhost:5198/${cepNumber || ""}`);
        return data;
       } catch (error) {
        if (axios.isAxiosError(error)) {
            return null
        };
        }
    return null;
};




export { addressFetcher };
