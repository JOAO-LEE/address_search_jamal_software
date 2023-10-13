import { AxiosError } from "axios";
import { TSeverity } from "../types/message/TMessage";

export class BadMessage implements Error {
    public message: string;
    public response: boolean;
    public severity: TSeverity
    public name: string;

    constructor(error: AxiosError | any) {
        this.message = error.response?.data?.message
        this.response = true
        this.severity = error.response?.data?.name
        this.name = error.response?.data?.name
    }
}