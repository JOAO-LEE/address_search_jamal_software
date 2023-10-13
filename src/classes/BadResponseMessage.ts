import { AxiosError } from "axios";
import { TAddressBadMessage, TSeverity } from "../types/address/TAddress";

export class BadMessage implements TAddressBadMessage {
    public message: string;
    public response: boolean;
    public severity: TSeverity
    public name: string;

    constructor(error: AxiosError) {
        this.message = error.response?.data?.message
        this.response = true
        this.severity = error.response?.data?.name
        this.name = error.response?.data?.name
    }
}