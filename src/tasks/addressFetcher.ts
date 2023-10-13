import axios, { AxiosError } from "axios";
import { TAddress } from "../types/address/TAddress";
import { BadMessage } from "../error/BadResponseMessage";

const apiAddress = "http://localhost:5198/"
const cepAddressOrAllAddresses = (cep?: string) => cep || "";

export const addressFetcher = async (cepNumber? : string): Promise<TAddress | TAddress[] | void> => {
    try {
        const response =  await axios.get(`${apiAddress}${cepAddressOrAllAddresses(cepNumber)}`);
        const { data } = response
        return data
       } catch (error: AxiosError | any) {
        if (axios.isAxiosError(error)) {
            throw new BadMessage(error);
        }
        throw new Error(error.message);
    }
};
