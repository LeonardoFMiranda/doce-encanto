'use client';
import { OrderItem } from "@/app/interface/OrderItem";
import { Produto } from "@/app/interface/Produtos";
import { createContext, useContext, useState, ReactNode } from "react";

interface OrderContextType {
    order: OrderItem[];
    addToOrder: (produto: Produto, tamanho: string, preco: string, quantidade: number) => void;
    removeFromOrder: (id: number) => void;
    removeOneFromOrder: (id: number, tamanho?: string) => void;
    updateItemQuantity: (id: number, tamanho: string | undefined, quantidade: number) => void;
    clearOrder: () => void;
    calculateTotalQuantity: () => number;
    calculateTotalPrice: () => number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addToOrder = (produto: Produto, tamanho: string, preco: string, quantidade: number) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.find(
                item => item.produto.id === produto.id && item.tamanhoSelecionado === tamanho
            );

            if (existingItem) {
                return prevOrder.map(item =>
                    item.produto.id === produto.id && item.tamanhoSelecionado === tamanho
                        ? { ...item, quantidade: item.quantidade + quantidade }
                        : item
                );
            } else {
                return [...prevOrder, { produto, quantidade, tamanhoSelecionado: tamanho, precoSelecionado: preco }];
            }
        });
    };

    // Atualiza a quantidade de um item diretamente
    const updateItemQuantity = (id: number, tamanho: string | undefined, quantidade: number) => {
        setOrder((prevOrder) => prevOrder.map(item => {
            if (item.produto.id === id && (tamanho === undefined || item.tamanhoSelecionado === tamanho)) {
                return { ...item, quantidade: quantidade < 1 ? 1 : quantidade };
            }
            return item;
        }));
    };


    const removeFromOrder = (id: number) => {
        setOrder((prevOrder) => prevOrder.filter(item => item.produto.id !== id));
    };

    // Remove apenas 1 unidade do item (ou remove o item se quantidade for 1)
    const removeOneFromOrder = (id: number, tamanho?: string) => {
        setOrder((prevOrder) => prevOrder.flatMap(item => {
            if (item.produto.id === id && (tamanho === undefined || item.tamanhoSelecionado === tamanho)) {
                if (item.quantidade > 1) {
                    return [{ ...item, quantidade: item.quantidade - 1 }];
                } else {
                    return [];
                }
            }
            return [item];
        }));
    };

    const clearOrder = () => {
        setOrder([]);
    };

    // Calcula a quantidade total de itens no pedido
    const calculateTotalQuantity = () => {
        return order.reduce((total, item) => total + item.quantidade, 0);
    };

    // Calcula o preço total do pedido
    const calculateTotalPrice = () => {
        return order.reduce((total, item) => {
            const precoStr = (item.precoSelecionado || "0").replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
            const priceNumber = parseFloat(precoStr);
            return total + priceNumber * item.quantidade;
        }, 0);
    };

    return (
        <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, removeOneFromOrder, updateItemQuantity, clearOrder, calculateTotalQuantity, calculateTotalPrice }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};
