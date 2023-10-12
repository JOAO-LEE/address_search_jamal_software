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

export type TAddressBadMessage = {
  severity?: "success" | "error"
  message?: string
  response?: boolean
}

type IAddress = {
    address: TAddress[] 
    addAddress: (address: TAddress[]) => void
    fetchAddressData: (cep?: string) => void
}

type TProviderProps = {
    children: React.ReactNode;
}

export type { IAddress,  TProviderProps, TAddressResponse };