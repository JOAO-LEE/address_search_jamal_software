export type TAddress = {
  cep: string 
  logradouro: string 
  complemento: string 
  bairro: string 
  localidade: string 
  uf: string 
  ibge: string 
  gia: string 
  ddd: string 
  siafi: string 
}

type TSeverity = "success" | "error"

type IAddress = {
    address: TAddress[] 
    addAddress: (address: TAddress[]) => void
    fetchAddressData: (cep?: string) => void
}

type TProviderProps = {
    children: React.ReactNode;
}

export type { IAddress,  TProviderProps, TAddressBadMessage, TSeverity };