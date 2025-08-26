"use client"

import React, { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { useOrder } from "@/context/OrderContext";
import { PromocoesCardProps } from "@/app/interface/PromocoesCard";
import { Produto } from "@/app/interface/Produtos";

function PromocoesCard({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  description,
  price,
  produto, 
}: PromocoesCardProps & { produto?: Produto }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToOrder } = useOrder();

  const handleAddClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getStableIdFromTitle = (t: string) =>
    Array.from(t).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const handleConfirm = () => {

    const promoProduto: Produto =
      produto ??
      ({
        id: getStableIdFromTitle(title || "promo"),
        name: title,
        image: imageSrc,
        description,
        type: "Promocao",
        size: [],
      } as unknown as Produto);

    addToOrder(promoProduto, "", price, quantity);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-primaryClay/80 max-w-screen-sm flex flex-row gap-7 p-6 border-2 border-primaryClay rounded-2xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="relative w-[220px] h-[220px] rounded-xl overflow-hidden group shadow-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
          />
          <button
            type="button"
            onClick={handleAddClick}
            className="absolute top-0 left-0 w-full h-full bg-primaryClay/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:opacity-100 focus:outline-none"
          >
            <span className="p-4 bg-primaryWhite rounded-full shadow-lg text-primaryClay text-2xl font-bold flex items-center gap-2">
              <ShoppingCart size={36} className="text-primaryGreen" />
              <span className="text-primaryClay text-lg">Adicionar</span>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-2 w-[220px] justify-center">
          <h1 className="delius-swash-caps-regular text-2xl sm:text-3xl text-foreground drop-shadow">
            {title}
          </h1>
          <p className="text-2xl font-bold text-gray-800">{price}</p>
          <span className="montserrat-400 text-lg text-foreground/80">{description}</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-primaryWhite rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-6 min-w-[300px]">
            <h2 className="text-xl font-bold text-primaryClay">Escolha a quantidade</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-primaryGreen text-white text-xl flex items-center justify-center hover:bg-primaryClay transition"
              >
                -
              </button>
              <span className="text-lg font-bold w-8 text-center text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-full bg-primaryGreen text-white text-xl flex items-center justify-center hover:bg-primaryClay transition"
              >
                +
              </button>
            </div>
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-lg bg-primaryClay/40 text-primaryClay font-bold hover:bg-primaryClay/70 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-lg bg-primaryGreen text-white font-bold hover:bg-primaryClay transition"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PromocoesCard