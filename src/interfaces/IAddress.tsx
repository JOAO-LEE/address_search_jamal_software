export type TAddress = {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string,
}

type IAddress = {
    address: Array<TAddress>,
    addAddress: (address: TAddress) => void
}

type TProviderProps = {
    children: React.ReactNode;
}

export type { IAddress, TProviderProps };