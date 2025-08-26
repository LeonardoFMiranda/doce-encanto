import React from 'react'
import Image from 'next/image'
import { SideModal } from '../../SideModal'
import { ShoppingBag } from "@phosphor-icons/react";
import { useOrder } from "@/context/OrderContext";
import { OrderItem } from "@/app/interface/OrderItem";

interface BagModalProps {
  handleModal: () => void;
}

function BagModal({ handleModal }: BagModalProps) {
  const { order, removeFromOrder, clearOrder, calculateTotalPrice, updateItemQuantity } = useOrder();

  const handleRemoveOneFromItem = (item: OrderItem) => {
    updateItemQuantity(item.produto.id, item.tamanhoSelecionado, item.quantidade - 1);
  };

  const handleAddOneFromItem = (item: OrderItem) => {
    updateItemQuantity(item.produto.id, item.tamanhoSelecionado, item.quantidade + 1);
  };

  return (
    <SideModal handleModal={handleModal}>
      <div className='flex flex-col items-center gap-4 w-full'>
        <ShoppingBag size={80} className='mb-2' />
        <h2 className="text-xl font-bold text-primaryClay">Minha Sacola</h2>
        {order.length === 0 ? (
          <p className="text-primaryClay/70">Sua sacola está vazia</p>
        ) : (
          <div className="w-full flex flex-col gap-4">
            <ul className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2">
              {order.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-primaryWhite/80 rounded-lg p-2 shadow-sm">
                  <Image
                    src={item.produto.image}
                    alt={item.produto.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border border-primaryClay/30"
                  />
                  <div className="flex-1 flex flex-col">
                    <span className="font-bold text-primaryClay">{item.produto.name}</span>
                    {item.tamanhoSelecionado && <span className="text-xs text-primaryClay/70">Tamanho: {item.tamanhoSelecionado}</span>}
                    <span className="text-xs text-primaryClay/70">Preço: {item.precoSelecionado}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleRemoveOneFromItem(item)} className="w-7 h-7 rounded-full bg-primaryClay/40 text-primaryClay font-bold hover:bg-primaryClay/70 transition flex items-center justify-center">-</button>
                    <span className="font-bold text-primaryGreen text-lg">x{item.quantidade}</span>
                    <button onClick={() => handleAddOneFromItem(item)} className="w-7 h-7 rounded-full bg-primaryGreen text-white font-bold hover:bg-primaryClay transition flex items-center justify-center">+</button>
                  </div>
                  <button onClick={() => removeFromOrder(item.produto.id)} className="ml-2 text-red-400 hover:text-red-600 font-bold text-lg">✕</button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-primaryClay">Total:</span>
                <span className="font-bold text-primaryGreen text-lg">R$ {calculateTotalPrice().toFixed(2)}</span>
              </div>
              <button onClick={clearOrder} className="w-full py-2 rounded-lg bg-primaryClay/40 text-primaryClay font-bold hover:bg-primaryClay/70 transition">Esvaziar sacola</button>
              <button className="w-full py-2 rounded-lg bg-primaryGreen text-white font-bold hover:bg-primaryClay transition">Finalizar compra</button>
            </div>
          </div>
        )}
      </div>
    </SideModal>
  )
}

export default BagModal