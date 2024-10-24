export interface CoffeeProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  onCart?: boolean;
}

export interface QuantitesProps {
  id: number;
  quantity: number;
}

export interface FormDataProps {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}
