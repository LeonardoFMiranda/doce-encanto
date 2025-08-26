import { Produto } from "./Produtos";

export interface OrderItem {
    produto: Produto;
    quantidade: number;
    tamanhoSelecionado?: string;
    precoSelecionado?: string;
}