// import { TAddress } from "../interfaces/IAddress";

const addressKeys = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf', 'ibge', 'gia', 'ddd', 'siafi'];

// export default async function addressHandler(addresses: TAddress[]): Promise<TAddress[]> {

//     const newAddresses = addresses.map((address: TAddress) => {
//         const updatedAddress = addressKeys.reduce((accAddress: string, currAddress: string) => {
//             accAddress[currAddress] = address[currAddress] === "" ? "N/A" : address[currAddress]
//             return accAddress
//         }, {})
//         return updatedAddress
//     });
//     return newAddresses;
// }


export { addressKeys };