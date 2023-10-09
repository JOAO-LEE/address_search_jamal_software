import axios, { AxiosError, AxiosResponse } from "axios";
import { TAddress } from "../types/TAddress";
// import { IAddress } from "../types/TAddress";

const addressFetcher = async (cepNumber? : string): Promise<TAddress[] | null> => {
    if (!cepNumber) {
       try {
        const {data} =  await axios.get("http://localhost:5198");
        return data;

       } catch (error) {
        if (axios.isAxiosError(error)) {
            return null
        };
       }
    };
    return null;
};

export { addressFetcher };
